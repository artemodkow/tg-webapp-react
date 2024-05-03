import React, { useState } from 'react';
import './Rating.css';

const Rating = ({ main, timeLeft }) => {
    const [currentUser] = useState({
        id: 7,
        name: 'Thomas Vien',
        coins: 56500,
        isCurrentUser: true
    });

    const dummyPlayers = main || [
        { id: 1, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 2, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 3, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 4, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 5, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 6, name: 'Thomas Vien', coins: 56500, isCurrentUser: true },
        { id: 7, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 8, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 9, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 10, name: 'Thomas Vien', coins: 289201, isCurrentUser: false },
        { id: 11, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 12, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        // Другие игроки
    ];

    const formatPlayersCount = (count) => `${count} игроков`;
    const formatTimeLeft = (hours) => `Осталось ${7}ч`;

    const renderCurrentUser = () => {
        const userIndex = dummyPlayers.findIndex(player => player.isCurrentUser);
        return (
            <div className="current-user-info">
                <div className="you-rate">{userIndex + 1}</div>
                <div className="player-name">{currentUser.name}</div>
                <div className="player-coins">
                    {currentUser.coins}
                    <img src={`${process.env.PUBLIC_URL}/icons/Монетка золотая право.png`} alt="coin icon" className="coin_icon"/>
                </div>
                <div className="you-tag">You</div>
            </div>
        );
    };

    return (
        <div className="rating-container">
            <div className="players-count">{formatPlayersCount(dummyPlayers.length)}</div>
            <div className="cup-section">
                <img src={`${process.env.PUBLIC_URL}/icons/Кубок.png`} alt="Cup" className="cup"/>
            </div>
            <div className="rate-container">
                <span className="time-left">{formatTimeLeft(timeLeft)}</span>
                <div className="rating-table">
                    {dummyPlayers.map((player, index) => (
                        <div key={player.id} className={`player-item ${player.isCurrentUser ? 'current-user' : ''}`}>
                            <div className="player-ranking">
                                {index < 3 ?
                                    <img src={`${process.env.PUBLIC_URL}/icons/medal${index + 1}.png`} alt="Medal"
                                         className="medal"/>
                                    : index + 1}
                            </div>
                            <div className="player-name">{player.name}</div>
                            <div className="player-coins">{player.coins}
                                <span>
                                <img src={`${process.env.PUBLIC_URL}/icons/Монетка золотая право.png`} alt="coin icon"
                                     className="coin_icon"/>
                            </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {dummyPlayers.length > 10 && renderCurrentUser()}
        </div>
    );
};

export default Rating;
