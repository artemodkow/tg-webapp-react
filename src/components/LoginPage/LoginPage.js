// components/LoginPage/LoginPage.js
import React, { useState } from 'react';
import MainPage from '../MainPage/MainPage'; // Убедитесь, что импортируете MainPage правильно
import './LoginPage.css';

const LoginPage = () => {
    const [referralLink, setReferralLink] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Логика валидации реферальной ссылки, если необходимо
        setIsLoggedIn(true); // Пользователь входит в систему
    };

    if (isLoggedIn) {
        return <MainPage />;
    }

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
