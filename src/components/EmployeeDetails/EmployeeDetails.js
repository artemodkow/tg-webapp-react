import React from 'react';
import './EmployeeDetails.css'; // CSS файл для стилей

const EmployeeDetails = ({employee, onUpgrade, onProtect }) => {
    return (
        <div className="employee-details">

            <img src={employee.avatar} alt={employee.name} className="employee-avatar-large"/>

            <div className="employee-header">
                <div className="employee-info">
                    <h1>{employee.name}</h1>
                    <p>Работает на вас</p>
                </div>
            </div>

            <div>
                <p>{employee.protected ? `Защищен на ${employee.protectionHours} часов` : 'Не защищен'}</p>
            </div>

            <div>
                <p>{employee.rate} ₽/min</p>
            </div>

            <div className="line">
                <img src={process.env.PUBLIC_URL + "/icons/line.png"} alt="line"/>
            </div>
            <div className="employee-actions">
                <button onClick={() => onUpgrade(employee.id)}>Прокачать за N ₽</button>
                <button onClick={() => onProtect(employee.id)}>Защитить за N ₽ на 8 часов</button>
            </div>
        </div>
    );
};

export default EmployeeDetails;
