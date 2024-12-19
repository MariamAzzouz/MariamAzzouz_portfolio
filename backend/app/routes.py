from flask import send_file, current_app, jsonify
import os

def register_routes(app):
    @app.route('/')
    def home():
        return jsonify(message="Welcome to the API!")  # You can return a simple message or render a template

    @app.route('/download_cv')
    def download_cv():
        try:
            # Get the absolute path to the static directory
            static_folder = os.path.join(current_app.root_path, 'static')
            return send_file(
                os.path.join(static_folder, 'Mariem_AZZOUZ_CV.pdf'),
                as_attachment=True,
                download_name='Mariem_AZZOUZ_CV.pdf'
            )
        except Exception as e:
            return jsonify(error=str(e)), 404