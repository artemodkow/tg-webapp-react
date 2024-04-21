// App.js
import React from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import './App.css'; // Глобальные стили, если они у вас есть

const App = () => {
    return (
        <div className="App">
            <LoginPage />
        </div>
    );
};

export default App;
