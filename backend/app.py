from flask import Flask
from routes import app  # Import routes from routes.py

if __name__ == "__main__":
    app.run(debug=True)
