import React from 'react';
import './Players.css';
import { useNavigate } from 'react-router-dom';

const players = [
    // Эти данные должны быть получены из API
    { id: 1, name: 'Ева Ефимова', price: 5000, avatar: process.env.PUBLIC_URL + "/icons/avatar.png", status: 'Работает на Fierro' },
    { id: 2, name: 'Петя Клюкин', price: 1000, avatar: process.env.PUBLIC_URL + "/icons/avatar.png", status: 'Работает на Nikita' },
    // ... другие игроки
];

const Trade = () => {

    const navigate = useNavigate();

    const handlePlayerClick = (playerId) => {
        // Переход на страницу Buy.js с передачей ID игрока в URL
        navigate(`/buy/${playerId}`);
    };

    return (
        <div className="trade-container">

            <h1 className="trade-header">Покупка игроков</h1>

            <ul className="player-list">
                {players.map(player => (
                    <li  key={player.id} className="player-item" onClick={() => handlePlayerClick(player.id)}>

                        <img src={player.avatar} alt={player.name} className="player-avatar"/>

                        <div className="player-info">

                            <div className="player-name">{player.name}</div>
                            <div className="player-status">{player.status}</div>

                        </div>

                        <div className="player-price">
                            <span>
                                {player.price}
                            </span>
                            <span><img src={process.env.PUBLIC_URL + "/icons/Монетка золотая право.png"} alt="Coin Icon"
                                       className="coin-price"/>
                            </span>
                        </div>
                        <div>
                            <img src={process.env.PUBLIC_URL + "/icons/go.png"} alt="go" className="go"/>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default Trade;
