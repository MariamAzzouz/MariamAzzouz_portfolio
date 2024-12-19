from flask import Flask
from flask_cors import CORS
from .routes import register_routes  # Import the function to register routes

def create_app():
    app = Flask(__name__)
    CORS(app, origins=['https://mariamazzouz.netlify.app'])

    # Register routes
    register_routes(app)  # Pass the app instance to the register function

    return app