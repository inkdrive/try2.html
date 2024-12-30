
// js/script.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

document.addEventListener('DOMContentLoaded', () => {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    document.getElementById('message-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const content = document.getElementById('content').value;

        try {
            const { data, error } = await supabase
                .from('messages')
                .insert([{ content }]);
            
            if (error) {
                console.error('Error:', error);
                alert('Failed to submit message. Please try again.');
            } else {
                alert('Message submitted successfully!');
            }
        } catch (err) {
            console.error('Unexpected error:', err);
        }
    });
});
