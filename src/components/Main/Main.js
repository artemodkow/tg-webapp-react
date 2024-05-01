import React, { useState} from 'react';
import './Main.css';
import Players from '../Players/Players';
import Boosts from '../Boosts/Boosts';
import Trade from '../Trade/Trade';
import Rating from "../Rating/Rating";
/*import { usetelegram } from '../hooks/usetelegram';*/


const Main = () => {
    /*const {username} = usetelegram();*/
    const [currentPage, setCurrentPage] = useState('main');

    const showPlayers = () => {
        setCurrentPage('main');
    };

    const userData = {
       /* avatar: avatar,*/
        name: "username",
        coins: "130,412",
        rating: "Rating " + "10,220" + "th",
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
                    href="https://t.me/share/url?url=https://t.me/sharecointestbot&text=Ты стал моим рабом!!! Заходи выкупиться"
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
            case 'main':
                return (
                    <>
                        <div className="user-info">
                            {/*<img src={user?.photo_url} className="user-avatar"/>*/}

                            {/*никнейм*/}
                            <div className="user-name-balance">
                                <div className="user-name">{userData.name}</div>
                                <div className="user-coins">
                                    {userData.coins}
                                    <img src={process.env.PUBLIC_URL + "/icons/Монетка золотая право.png"} alt="Coin"
                                         className="coin-icon-coins"/>
                                </div>
                            </div>
                            {/*рейтинг*/}
                            {/* рейтинг */}
                            <div className="text-rating">
                                <div className="text-rating-gradient">
                                    {userData.rating}
                                </div>
                            </div>
                            <div className="user-rating" onClick={() => setCurrentPage('rating')}>

                                <img
                                    src={process.env.PUBLIC_URL + "/icons/Кубок.png"}
                                    alt="Rating Icon"
                                    className="rating-icon"
                                />
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
                                href="https://t.me/share/url?url=https://t.me/sharecointestbot&text=Ты стал моим рабом!!! Заходи выкупиться"
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
            case 'players':
                return <Players/>
            case 'boosts':
                return <Boosts/>;
            case 'trade':
                return <Trade/>;
            case 'rating':
                return <Rating/>
            default:
                return null;
        }
    };
    return (
        <div className="Main-container">

            {currentPage !== 'main' && (
                <button className="back-button" onClick={() => setCurrentPage('main')}>
                    <img src={`${process.env.PUBLIC_URL}/icons/back.png`} alt="Back" />
                    Назад
                </button>
            )}

            {/* Показать навигационные кнопки только если текущая страница не 'rating' */}
            {currentPage !== 'rating' && (
                <div className="navigation">
                    <button onClick={() => setCurrentPage('players')}>
                        <img src={`${process.env.PUBLIC_URL}/icons/players.png`} alt="Players"
                             className="nav-icon"/>
                        Players
                    </button>
                    <button onClick={() => setCurrentPage('boosts')}>
                        <img src={`${process.env.PUBLIC_URL}/icons/boosts.png`} alt="Boosts" className="nav-icon"/>
                        Boosts
                    </button>
                    <button onClick={() => setCurrentPage('trade')}>
                        <img src={`${process.env.PUBLIC_URL}/icons/trade.png`} alt="Trade" className="nav-icon"/>
                        Trade
                    </button>
                </div>
            )}
            {/* Остальное содержимое, например, вывод компонента с игроками */}
            {renderContent()}
        </div>
    );


};

export default Main;