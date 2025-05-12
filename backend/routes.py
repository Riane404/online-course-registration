from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
from models import db, User, Course, bcrypt
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
jwt = JWTManager(app)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    role = data.get('role')

    # Check if user already exists
    user = User.query.filter_by(username=username).first()
    if user:
        return jsonify({"message": "User already exists!"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(username=username, email=email, password=hashed_password, role=role)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully!"}), 201


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()
    if not user or not user.check_password(password):
        return jsonify({"message": "Invalid credentials!"}), 401

    access_token = create_access_token(identity=user.username)
    return jsonify({"message": "Login successful!", "access_token": access_token})


@app.route('/courses', methods=['GET'])
@jwt_required()
def get_courses():
    courses = Course.query.all()
    courses_list = [{"id": course.id, "name": course.name, "description": course.description} for course in courses]
    return jsonify(courses_list)


@app.route('/add_course', methods=['POST'])
@jwt_required()
def add_course():
    data = request.get_json()
    name = data.get('name')
    description = data.get('description')

    current_user = get_jwt_identity()  # Use JWT to identify the current user
    user = User.query.filter_by(username=current_user).first()

    if not user:
        return jsonify({"message": "User not found!"}), 404

    new_course = Course(name=name, description=description, user_id=user.id)
    db.session.add(new_course)
    db.session.commit()

    return jsonify({"message": "Course added successfully!"}), 201

if __name__ == "__main__":
    app.run(debug=True)
