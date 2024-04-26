import React, { useState } from 'react';
import './Players.css';
//import ShareButton from './ShareButton';
// Путь до ShareButton.js может отличаться
import { Telegram } from 'react-social-sharing';
import Boosts from '../Boosts/Boosts';
import Trade from '../Trade/Trade';

const Players = () => {
    const [currentPage, setCurrentPage] = useState('players');
    const userData = {
        avatar: "path_to_avatar",
        name: "Thomas Vien",
        coins: 56500,
        rating: 10220,
        // Предположим, что вы здесь вставляете реальные данные пользователя...
    };
    const employees = [
        // Предположим, что вы здесь вставляете реальные данные работников...
    ];

    const renderContent = () => {
        switch (currentPage) {
            case 'players':
                return (
                    <>
                        <div className="user-info">
                            <img src={userData.avatar} alt="User Avatar" className="user-avatar"/>
                            <div className="user-name">{userData.name}</div>
                            <div className="user-rating">
                                <img src="path_to_rating_icon" alt="Rating Icon" className="rating-icon"/>
                                <div>{userData.rating}</div>
                            </div>
                            <div className="big-balance">
                                <img src="path_to_coin_icon" alt="Coin Icon" className="coin-icon"/>
                                {userData.coins}
                            </div>
                        </div>
                        <div className="share-button-container">
                            <div className="referral-text">
                                Если другие игроки перейдут по вашей ссылке, они станут вашими работниками.
                            </div>
                            <Telegram solid medium link={shareUrl} message="Share on Telegram"/>
                        </div>
                        <div className="employees-container">
                            <div className="employees-header">Мои работники: {employees.length}</div>
                            {/* Здесь должен быть ваш код для отображения списка работников */}
                        </div>
                    </>
                );
            case 'boosts':
                return <Boosts/>;
            case 'trade':
                return <Trade/>;
            default:
                return null;
        }
    };

    return (
        <div className="players-container">
            <div className="navigation">
            <button onClick={() => setCurrentPage('players')}>Players</button>
                <button onClick={() => setCurrentPage('boosts')}>Boosts</button>
                <button onClick={() => setCurrentPage('trade')}>Trade</button>
            </div>
            {renderContent()}
        </div>
    );
};

export default Players;