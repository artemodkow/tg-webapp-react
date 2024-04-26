import React, { useState } from 'react';
import './Players.css';
import Boosts from '../Boosts/Boosts';
import Trade from '../Trade/Trade';
import Navigation from '../Navigation/Navigation'; // Если у вас есть общий компонент навигации

const Players = () => {
    const [currentPage, setCurrentPage] = useState('players');
    // Предположим, что данные о работниках и пользователе загружаются откуда-то
    const userData = {
        avatar: "path_to_avatar",
        name: "Thomas Vien",
        coins: 56500,
        rating: 10220,
        // другие данные пользователя...
    };
    const employees = [
        // Загруженные данные о работниках
    ];

    const renderContent = () => {
        switch (currentPage) {
            case 'players':
                // Возвращаем JSX для списка работников, который должен быть загружен
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
                            <div className="referral-link">Если другие игроки перейдут по вашей ссылке...</div>
                        </div>
                        <div className="employees-container">
                            <div className="employees-header">Мои работники: {employees.length}</div>
                            {employees.map(employee => (
                                <div key={employee.id} className="employee-item">
                                    <img src={employee.avatar} alt={employee.name} className="employee-avatar"/>
                                    <div className="employee-name">{employee.name}</div>
                                    <div>{employee.income} /min</div>
                                </div>
                            ))}
                        </div>
                    </>
                );
            case 'boosts':
                return <Boosts />;
            case 'trade':
                return <Trade />;
            default:
                return null;
        }
    };

    return (
        <div className="players-container">
            {renderContent()}
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default Players;
