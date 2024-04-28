import React, { useState, useEffect } from 'react';
import './Players.css';
import ShareButton from './ShareButton'; // Путь до ShareButton.js может отличаться
import Boosts from '../Boosts/Boosts';
import Trade from '../Trade/Trade';
import {usetelegram} from "../hooks/usetelegram";

const Players = () => {
    const {tg, user, avatar} = usetelegram();
    const [currentPage, setCurrentPage] = useState('players');
    const userData = {
       /* avatar: avatar,*/
        name: user?.username,
        coins: 56500,
        rating: "Rating " + 10220 + "th",
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
                            {/*<img src={user?.photo_url} className="user-avatar"/>*/}

                            {/*никнейм*/}
                            <div className="user-name">{userData.name}</div>
                            {/*монеты у ника*/}
                            <div className="user-coins">
                                {userData.coins}
                                <img src={process.env.PUBLIC_URL + "/icons/Монетка золотая право.png"} alt="Coin"
                                     className="coin-icon"/>
                            </div>
                            {/*рейтинг*/}
                            <div className="user-rating">
                                <div>{userData.rating}</div>
                                <img src={process.env.PUBLIC_URL + "/icons/Кубок.png"} alt="Rating Icon"
                                     className="rating-icon"/>
                            </div>
                        </div>

                        <div className="big-balance-container">
                            <div className="big-balance">
                                {userData.coins}
                                <img src={process.env.PUBLIC_URL + "/icons/Монетка золотая право.png"} alt="Coin Icon"
                                     className="coin-icon"/>
                            </div>
                        </div>

                        <div className="referral-container">
                            <div className="referral-text">
                                Если другие игроки перейдут по вашей ссылке, они станут вашими работниками.
                            </div>
                            <ShareButton url="https://your-referral-link.com"/>
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