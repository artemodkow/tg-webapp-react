import React from 'react';
import './Trade.css';

const players = [
    // Эти данные должны быть получены из API
    { id: 1, name: 'Ева Ефимова', price: 5000, avatar: 'path_to_avatar', status: 'Работает на Fierro' },
    { id: 2, name: 'Петя Клюкин', price: 1000, avatar: 'path_to_avatar', status: 'Работает на Nikita' },
    // ... другие игроки
];

const Trade = () => {
    return (
        <div className="trade-container">
            <h1 className="trade-header">Покупка игроков</h1>
            <ul className="player-list">
                {players.map(player => (
                    <li key={player.id} className="player-item">
                        <img src={player.avatar} alt={player.name} className="player-avatar" />
                        <div className="player-info">
                            <h2 className="player-name">{player.name}</h2>
                            <p className="player-status">{player.status}</p>
                        </div>
                        <div className="player-price">
                            <span>{player.price}</span> 🪙
                        </div>
                    </li>
                ))}
            </ul>
            {/* Предполагается, что навигация уже существует и её стили определены */}
        </div>
    );
};

export default Trade;
