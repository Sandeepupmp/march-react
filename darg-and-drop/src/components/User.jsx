import React, { useState } from 'react';

function UsernameSystem() {
    const [username, setUsername] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [submittedUsername, setSubmittedUsername] = useState('');
    const [demoData] = useState([
        'john_doe123',
        'jane_smith456',
        'user007'
    ]);

    const handleChange = (event) => {
        setUsername(event.target.value);
        setIsUsernameValid(true); // Reset validation when user types
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic validation: Ensure username is not empty
        if (username.trim() === '') {
            setIsUsernameValid(false);
            return;
        }

        // Additional validation: Check if username contains only alphanumeric characters
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;
        if (!alphanumericRegex.test(username)) {
            setIsUsernameValid(false);
            return;
        }

        // Check if username length is between 3 to 20 characters
        if (username.length < 3 || username.length > 20) {
            setIsUsernameValid(false);
            return;
        }

        // Check if username already exists in demo data
        if (demoData.includes(username)) {
            setIsUsernameValid(false);
            return;
        }

        // Here you can perform further validation or send the username to a server
        // For simplicity, we'll just set the submittedUsername state
        setSubmittedUsername(username);
        setUsername(''); // Clear input field after submission
    };

    return (
        <div>
            <h1>Username System</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your username:
                    <input
                        type="text"
                        value={username}
                        onChange={handleChange}
                    />
                </label>
                {!isUsernameValid && <p style={{ color: 'red' }}>Please enter a valid username (3-20 characters, alphanumeric characters only, and not already taken).</p>}
                <button type="submit">Submit</button>
            </form>
            {submittedUsername && (
                <div>
                    <p>Submitted username: {submittedUsername}</p>
                </div>
            )}
        </div>
    );
}

export default UsernameSystem;
