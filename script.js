// env.js
const SUPABASE_URL = 'https://khhpbnpdtkvymrycvtgi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoaHBibnBkdGt2eW1yeWN2dGdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyODQzNzAsImV4cCI6MjA1MDg2MDM3MH0.RGTy42QZUyb-cdmtWnzLa199u4N20kLEaVmC9yoPtus';
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
