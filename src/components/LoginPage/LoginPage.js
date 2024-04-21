// components/LoginPage/LoginPage.js

import React, { useState } from 'react';
import './LoginPage.css';  // Стили для LoginPage

const LoginPage = ({ onLogin }) => {
    const [referralLink, setReferralLink] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(referralLink);
    };

    return (
        <div className="login-page">
            <h1>ShareCoin</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Вставьте реферальную ссылку (если имеется)"
                    value={referralLink}
                    onChange={(e) => setReferralLink(e.target.value)}
                />
                <button type="submit">Продолжить</button>
            </form>
        </div>
    );
};

export default LoginPage;
