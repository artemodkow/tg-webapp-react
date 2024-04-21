// App.js

import React, { useState } from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import './App.css'; // Подключите основные стили приложения, если они у вас есть

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (referralLink) => {
        console.log('Реферальная ссылка:', referralLink); // Обработка реферальной ссылки
        setIsLoggedIn(true); // Переключение состояния входа
    };

    return (
        <div className="App">
            {!isLoggedIn ? (
                <LoginPage onLogin={handleLogin} />
            ) : (
                <MainPage />
            )}
        </div>
    );
};

export default App;

