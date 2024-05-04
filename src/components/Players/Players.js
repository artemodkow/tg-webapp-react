import React, { useState } from 'react';
import './Players.css';
import Buy from '../Buy/Buy'; // Убедитесь, что путь корректен

const players = [
    { id: 1, name: 'Ева Ефимова', price: 5000, avatar: process.env.PUBLIC_URL + "/icons/avatar.png", status: 'Работает на Fierro' },
    { id: 2, name: 'Петя Клюкин', price: 1000, avatar: process.env.PUBLIC_URL + "/icons/avatar.png", status: 'Работает на Nikita' },
    // ... другие игроки
];

const Players = () => {
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const handlePlayerClick = (player) => {
        setSelectedPlayer(player);
    };

    if (selectedPlayer) {
        return <Buy playerId={selectedPlayer.id} />; // Передаем ID в Buy, где он будет использован для получения данных
    }

    return (
        <div className="trade-container">
            <h1 className="trade-header">Покупка игроков</h1>
            <ul className="player-list">
                {players.map(player => (
                    <li key={player.id} className="player-item" onClick={() => handlePlayerClick(player)}>
                        <img src={player.avatar} alt={player.name} className="player-avatar"/>
                        <div className="player-info">
                            <div className="player-name">{player.name}</div>
                            <div className="player-status">{player.status}</div>
                        </div>
                        <div className="player-price">
                            <span>{player.price}</span>
                            <img src={process.env.PUBLIC_URL + "/icons/Монетка золотая право.png"} alt="Coin Icon" className="coin-price"/>
                        </div>
                        <img src={process.env.PUBLIC_URL + "/icons/go.png"} alt="go" className="go"/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Players;
