import React, { useState } from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (referralLink) => {
        console.log('Реферальная ссылка:', referralLink);
        setIsLoggedIn(true);
    };

    return (
        <div className="App">
            {!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : <MainPage />}
        </div>
    );
};

export default App;
