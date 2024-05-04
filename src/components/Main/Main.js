import React, { useState } from 'react';
import './Main.css';
import Players from '../Players/Players'; // Проверьте путь к компоненту
import Boosts from '../Boosts/Boosts';
import Trade from '../Trade/Trade';
import Rating from "../Rating/Rating";
import EmployeeDetails from '../EmployeeDetails/EmployeeDetails';
import Buy from '../Buy/Buy'; // Проверьте путь к компоненту

const Main = () => {
    const [currentPage, setCurrentPage] = useState('main');
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);

    const userData = {
        name: "username",
        coins: "130,412",
        rating: "Rating " + "10,220" + "th",
        count_slaves: 0
    };

    const employees = [
        { id: 1, name: 'John Doe', avatar: process.env.PUBLIC_URL + "/icons/avatar.png", job: 'Developer', rate: '1,000', protected: false, protectionHours: 0 },
        { id: 2, name: 'Jane De', avatar: process.env.PUBLIC_URL + "/icons/avatar.png", job: 'Designer', rate: '850', protected: true, protectionHours: 8 },
        { id: 3, name: 'John Doe', avatar: process.env.PUBLIC_URL + "/icons/avatar.png", job: 'Developer', rate: '1,000', protected: false, protectionHours: 0 },
        { id: 4, name: 'Jane Doe', avatar: process.env.PUBLIC_URL + "/icons/avatar.png", job: 'Designer', rate: '850', protected: true, protectionHours: 8 },
    ];

    const handleEmployeeClick = (employee) => {
        setSelectedEmployee(employee);
        setCurrentPage('employeeDetails');
    };

    const handleUpgrade = (employeeId) => {
        console.log('Upgrade clicked for:', employeeId);
    };

    const handleProtect = (employeeId) => {
        console.log('Protect clicked for:', employeeId);
    };

    const handleBuyPlayer = (playerId) => {
        setSelectedPlayerId(playerId);
        setCurrentPage('buy');
    };

    const renderEmployees = () => (
        <div className="employees-container">
            <div className="employee-row">
                {employees.map(employee => (
                    <div key={employee.id} onClick={() => handleEmployeeClick(employee)} className="employee-item">
                        <img src={employee.avatar} alt={employee.name} className="employee-avatar"/>
                        <div className="employee-info">
                            <span className="employee-name">{employee.name}</span>
                            <span className="employee-rate">
                                <div>
                                    {employee.rate}
                                </div>
                                n/min</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderNoEmployees = () => (
        <div className="no-employees-container">
            У вас нет работников.
            <div className="referral-link-button">
                <a href="https://t.me/share/url?url=https://t.me/sharecointestbot&text=Ты стал моим рабом!!! Заходи выкупиться" target="_blank" className="telegram-share-button">
                    <img src={`${process.env.PUBLIC_URL}/icons/share.png`} alt="share button"/>
                </a>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (currentPage) {
            case 'main':
                return (
                    <>
                        <div className="user-info">
                            <div className="user-name-balance">
                                <div className="user-name">{userData.name}</div>
                                <div className="user-coins">
                                    {userData.coins}
                                    <img src={process.env.PUBLIC_URL + "/icons/Монетка золотая право.png"} alt="Coin"
                                         className="coin-icon-coins"/>
                                </div>
                            </div>
                            <div className="text-rating">
                                <div className="text-rating-gradient">
                                    {userData.rating}
                                </div>
                            </div>
                            <div className="user-rating" onClick={() => setCurrentPage('rating')}>
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
                                href="https://t.me/share/url?url=https://t.me/sharecointestbot&text=Ты стал моим рабом!!! Заходи выкупиться"
                                target="_blank"
                                className="telegram-share-button"
                            >
                                <img src={`${process.env.PUBLIC_URL}/icons/share.png`} alt="Coin Icon"
                                     className="telegram-share-button"/>
                            </a>
                        </div>
                        <div className="employees-header">Мои работники: {employees.length}</div>
                        {employees.length > 0 ? renderEmployees() : renderNoEmployees()}
                    </>
                );
            case 'employeeDetails':
                return <EmployeeDetails employee={selectedEmployee} onUpgrade={handleUpgrade} onProtect={handleProtect} />;
            case 'buy':
                return <Buy playerId={selectedPlayerId} />;
            case 'players':
                return <Players onBuyPlayer={handleBuyPlayer} />;
            case 'boosts':
                return <Boosts />;
            case 'trade':
                return <Trade />;
            case 'rating':
                return <Rating />;
            default:
                return null;
        }
    };

    return (
        <div className="Main-container">
            {currentPage !== 'main' && (
                <button className="back-button" onClick={() => setCurrentPage('main')}>
                    <img src={`${process.env.PUBLIC_URL}/icons/back.png`} alt="Back"/> Назад
                </button>
            )}
            {currentPage !== 'rating' && (
                <div className="navigation">
                    <button onClick={() => setCurrentPage('players')}>
                        <img src={`${process.env.PUBLIC_URL}/icons/players.png`} alt="Players" className="nav-icon"/> Players
                    </button>
                    <button onClick={() => setCurrentPage('boosts')}>
                        <img src={`${process.env.PUBLIC_URL}/icons/boosts.png`} alt="Boosts" className="nav-icon"/> Boosts
                    </button>
                    <button onClick={() => setCurrentPage('trade')}>
                        <img src={`${process.env.PUBLIC_URL}/icons/trade.png`} alt="Trade" className="nav-icon"/> Trade
                    </button>
                </div>
            )}
            {renderContent()}
        </div>
    );
};

export default Main;

