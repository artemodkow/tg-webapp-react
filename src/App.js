import React, { useState, useEffect } from 'react';
import Players from './components/Players/Players';
import './App.css';

const App = () => {
    const [userData, setUserData] = useState({ name: '' });

    useEffect(() => {
        // Функция для безопасного получения данных пользователя
        function fetchUserData() {
            if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
                const user = window.Telegram.WebApp.initDataUnsafe.user;
                if (user && user.username) { // Проверка на наличие user и user.username
                    setUserData({
                        name: user.username,
                    });
                }
            }
        }

        if (window.Telegram) {
            window.Telegram.WebApp.ready();
            fetchUserData();
        }

        // Периодическая проверка на случай, если данные станут доступны позже
        const intervalId = setInterval(fetchUserData, 1000);

        return () => {
            clearInterval(intervalId); // Очистка интервала при размонтировании компонента
        };
    }, []);

    return (
        <div className="App">
            <Players userData={userData} />
        </div>
    );
};

export default App;
