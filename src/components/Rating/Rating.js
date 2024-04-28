import React, {useState} from 'react';
import './Rating.css'; // Убедитесь, что CSS файл подключен

const Rating = ({ onBackClick, players, timeLeft }) => {
    // Функция для форматирования числа игроков
    const formatPlayersCount = (count) => {
        return `${count} Игроков`;
    };

    // Функция для форматирования времени до окончания
    const formatTimeLeft = (hours) => {
        return `Осталось ${hours}ч`;
    };

    // Заглушка данных о игроках, если они не предоставлены
    const dummyPlayers = players || [
        { id: 1, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        // ... остальные игроки
    ];

    return (
        <div className="rating-container">
            <div className="rating-header">
                <button className="back-button" onClick={onBackClick}>Назад</button>
                <div className="players-count">{formatPlayersCount(dummyPlayers.length)}</div>
                <div className="time-left">{formatTimeLeft(timeLeft)}</div>
            </div>
            <div className="cup-section">
                {/* Здесь будет изображение кубка */}
            </div>
            <div className="rating-table">
                {dummyPlayers.map((player) => (
                    <div key={player.id} className={`player-item ${player.isCurrentUser ? 'current-user' : ''}`}>
                        <div className="player-ranking">{player.id}</div>
                        <div className="player-name">{player.name}</div>
                        <div className="player-coins">{player.coins}</div>
                    </div>
                ))}
            </div>
            {/* Кнопка и информация о текущем пользователе, если он не в основном списке */}
            {dummyPlayers.length > 6 && ( /* Предполагаем, что на странице отображается 6 игроков */
                <div className="current-user-info">
                    <div className="player-name">Thomas Vien</div>
                    <div className="player-coins">56500</div>
                    <div className="you-tag">You</div>
                </div>
            )}
        </div>
    );
};

export default Rating;
