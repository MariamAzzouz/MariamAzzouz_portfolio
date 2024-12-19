from flask import Flask
from flask_cors import CORS
from flask_mail import Mail
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

def create_app():
    app = Flask(__name__)
    CORS(app, origins=['https://mariamazzouz.netlify.app'])

    # Register routes
    from .routes import register_routes
    register_routes(app)

    return app
