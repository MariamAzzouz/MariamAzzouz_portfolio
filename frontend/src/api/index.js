import { API_URL } from '../config';

// Use API_URL in your API calls
// Example:
export const sendMessage = async (data) => {
    const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return response.json();
}; 