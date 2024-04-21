import React from 'react';
import './UserCard.css';

const UserCard = ({ name, income }) => {
    return (
        <div className="UserCard">
            <p>{name}</p>
            <p>Доход: {income} ₽ / минута</p>
            {/* Место для кнопок действий, если они требуются */}
        </div>
    );
};

export default UserCard;
