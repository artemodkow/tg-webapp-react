import React, { useEffect, useState } from 'react';
import './Buy.css';

const Buy = ({ playerId }) => {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        // Имитация получения данных игрока по ID
        const fetchEmployee = async () => {
            const data = {
                id: playerId,
                name: 'Ева Ефимова', // Заглушка для имени
                avatar: process.env.PUBLIC_URL + "/icons/avatar.png",
                protected: true,
                protectionHours: 0,
                rate: 100,
                price: 5000,
                free: true // Доступен для покупки
            };
            setEmployee(data);
        };

        fetchEmployee();
    }, [playerId]);

    if (!employee) {
        return <p>Загрузка данных...</p>;
    }

    return (
        <div className="employee-details">
            <div className="employee-header">
                <img src={employee.avatar} alt={employee.name} className="employee-avatar-large"/>
                <div className="employee-info">
                    <h1>{employee.name}</h1>
                    <div className="status">Свободен</div>
                </div>
            </div>
            <div className="price">
                <p>{employee.rate} <img src={process.env.PUBLIC_URL + "/icons/Монетка золотая право.png"}
                                        alt="Coin Icon"
                                        className="coin-buy"/></p>

            </div>
            {employee.free && (
                <button className="buy-button">Купить</button>
            )}
            <div className="line-buy">
                <img src={process.env.PUBLIC_URL + "/icons/line.png"} alt="line"/>
            </div>

            <div className="info-buy">
                <p className="in-info-buy">Доступность:</p>
                <p className="in-info-buy">Свободен</p>
                <img src={process.env.PUBLIC_URL + "/icons/цепи.png"} alt="icon"
                     className="icon-info-buy"/>
            </div>
            <div className="info-buy">
                <p className="in-info-buy">Заработано звезд:</p>
                <p className="in-info-buy">231</p>
                <img src={process.env.PUBLIC_URL + "/icons/star.png"} alt="icon"
                     className="icon-info-buy"/>
            </div>
            <div className="info-buy">
                <p className="in-info-buy">Зарабатывает:</p>
                <p className="in-info-buy">750</p>
                <img src={process.env.PUBLIC_URL + "/icons/Монетка золотая право.png"} alt="icon" className="icon-info-buy"/>
            </div>

        </div>


    )
        ;
};

export default Buy;
