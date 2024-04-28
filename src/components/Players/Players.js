import React, { useState, useEffect } from 'react';
import './Players.css';
import Boosts from '../Boosts/Boosts';
import Trade from '../Trade/Trade';
/*import {usetelegram} from "../hooks/usetelegram";*/

const Players = () => {
    const {tg, user, avatar} = usetelegram();
    const [currentPage, setCurrentPage] = useState('players');
    const userData = {
       /* avatar: avatar,*/
        /*name: user?.username || "username",*/
        coins: 56500,
        rating: "Rating " + 10220 + "th",
        count_slaves: 0
        // Предположим, что вы здесь вставляете реальные данные пользователя...
    };
    const employees = [
        // Предположим, что вы здесь вставляете реальные данные работников...
    ];
    const renderNoEmployees = () => (
        <div className="no-employees-container">
            <div className="no-employees-text">
                У вас нет работников.
            </div>
            <div className="referral-link-button">
                <a
                    href="https://t.me/share/url?url=https://your-referral-link.com&text=Проверьте+эту+игру!"
                    target="_blank"
                    className="telegram-share-button"
                >
                    <img src={`${process.env.PUBLIC_URL}/icons/share.png`} alt="share button"/>
                </a>
            </div>
            <div className="coins-icon-inshare">
                <img src={`${process.env.PUBLIC_URL}/icons/Монетка золотая право.png`} alt="Coins" className="coins-icon-size"/>
            </div>
            <div className="no-employees-text-referal">
                Пригласи друзей по реферальной ссылке, чтобы начать зарабатывать.
            </div>

        </div>
    );

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
                                     className="coin-icon-coins"/>
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
                            <a
                                href="https://t.me/share/url?url=https://your-referral-link.com&text=Проверьте+эту+игру!"
                                target="_blank"
                                className="telegram-share-button"
                            >
                                <img src={`${process.env.PUBLIC_URL}/icons/share.png`} alt="Coin Icon"
                                     className="telegram-share-button"/>
                            </a>
                        </div>

                        <div className="employees-container">
                            <div className="employees-header">Мои работники: {userData.count_slaves}</div>
                            {/* Здесь должен быть ваш код для отображения списка работников */}
                        </div>
                        {userData.count_slaves === 0 ? renderNoEmployees() : employees}
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