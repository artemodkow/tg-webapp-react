import React from 'react';
import './UserBalance.css';

const UserBalance = () => {
    const balance = 169396; // Это значение будет получено из API
    return (
        <div className="UserBalance">
            <h1>Баланс: {balance} ₽</h1>
            {/* Кнопки действий */}
        </div>
    );
};

export default UserBalance;
