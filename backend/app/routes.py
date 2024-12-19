from flask import send_file, current_app, jsonify, request
import os
from flask_mail import Mail, Message

def register_routes(app):
    # Configure Flask-Mail with environment variables
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME', 'azzouzmariam3@gmail.com')
    app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')  # Make sure this is set in your environment
    app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_USERNAME', 'azzouzmariam3@gmail.com')

    mail = Mail(app)

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

    @app.route('/send-message', methods=['POST'])
    def send_message():
        try:
            data = request.json
            print("Received data:", data)  # Debug print
            
            if not all(key in data for key in ['name', 'email', 'message']):
                return jsonify({"error": "Missing required fields"}), 400

            msg = Message(
                subject=f"Portfolio Contact from {data['name']}",
                recipients=['azzouzmariam3@gmail.com'],
                body=f"""
                Name: {data['name']}
                Email: {data['email']}
                Message: {data['message']}
                """,
                sender=app.config['MAIL_DEFAULT_SENDER']
            )

            try:
                mail.send(msg)
                return jsonify({"message": "Email sent successfully!"}), 200
            except Exception as mail_error:
                print("Mail error:", str(mail_error))  # Debug print
                return jsonify({"error": f"Mail sending failed: {str(mail_error)}"}), 500

        except Exception as e:
            print("General error:", str(e))  # Debug print
            return jsonify({"error": str(e)}), 500