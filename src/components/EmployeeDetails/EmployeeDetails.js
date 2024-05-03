import React from 'react';
import './EmployeeDetails.css'; // CSS файл для стилей

const EmployeeDetails = ({ employee, onUpgrade, onProtect }) => {
    return (
        <div className="employee-details">
            <div className="employee-header">
                <img src={employee.avatar} alt={employee.name} className="employee-avatar-large" />
                <div className="employee-info">
                    <h1>{employee.name}</h1>
                    <p>Работает на вас</p>
                    <p>{employee.protected ? `Защищен на ${employee.protectionHours} часов` : 'Не защищен'}</p>
                    <p>{employee.rate} ₽/min</p>
                </div>
            </div>
            <div className="employee-actions">
                <button onClick={() => onUpgrade(employee.id)}>Прокачать за N ₽</button>
                <button onClick={() => onProtect(employee.id)}>Защитить за N ₽ на 8 часов</button>
            </div>
        </div>
    );
};

export default EmployeeDetails;
