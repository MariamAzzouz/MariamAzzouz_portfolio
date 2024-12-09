from flask import send_from_directory, jsonify

def register_routes(app):
    @app.route('/')
    def home():
        return jsonify(message="Welcome to the API!")  # You can return a simple message or render a template

    @app.route('/download_cv')
    def download_cv():
        return send_from_directory('static', 'Mariem_AZZOUZ_CV.pdf')  # Ensure the file is in the 'static' directory