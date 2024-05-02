import React from 'react';
import './Rating.css'; // Подключаем ваш CSS файл

const Rating = ({ main, timeLeft }) => {
    const formatPlayersCount = (count) => `${count} игроков`;
    const formatTimeLeft = (hours) => `Осталось ${7}ч`;

    const dummyPlayers = main || [
        { id: 1, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 2, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 3, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 4, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 5, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 6, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 7, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 8, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 9, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 10, name: 'Thomas Vien', coins: 56500, isCurrentUser: true },
        { id: 11, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        { id: 12, name: 'Thomas Vien', coins: 1146500, isCurrentUser: false },
        // Другие игроки
    ];

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
                                    <img src={`${process.env.PUBLIC_URL}/icons/medal${index+1}.png`} alt="Medal" className="medal"/>
                                    : index + 1}
                            </div>
                             {player.name}
                            <div className="player-coins">{player.coins}</div>
                            <span>
                                <img src={`${process.env.PUBLIC_URL}/icons/Монетка золотая право.png`} alt="coin icon" className="coin_icon"/>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            {dummyPlayers.length > 10 && ( /* Предполагаем, что на странице отображается 6 игроков */
                <div className="current-user-info">
                    <div className="you-rate">
                        {dummyPlayers.map((player, index) => (
                            <div></div>
                        ))}
                    </div>
                    <div className="player-name">Thomas Vien</div>

                    <div className="player-coins">
                        56500
                        <span>
                            <img src={`${process.env.PUBLIC_URL}/icons/Монетка золотая право.png`} alt="coin icon"
                                 className="coin_icon"/>
                        </span>
                    </div>

                    <div className="you-tag">You</div>

                </div>
            )}
        </div>
    );
};

export default Rating;
