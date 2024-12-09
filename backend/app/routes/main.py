from flask import Blueprint, jsonify
from app.models.profile import Profile

bp = Blueprint('main', __name__)

@bp.route('/api/profile')
def get_profile():
    return jsonify({
        'name': 'Your Name',
        'title': 'Full Stack Developer',
        'about': 'Your professional summary...',
        'skills': {
            'frontend': ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind'],
            'backend': ['Python', 'Flask', 'SQL'],
            'tools': ['Git', 'Docker', 'AWS']
        },
        'experience': [
            {
                'title': 'Position',
                'company': 'Company Name',
                'period': '2020-Present',
                'description': 'Key achievements...'
            }
        ]
    }) 