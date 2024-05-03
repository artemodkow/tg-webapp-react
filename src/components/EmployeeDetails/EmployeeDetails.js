import React from 'react';
import './EmployeeDetails.css'; // CSS файл для стилей

const EmployeeDetails = ({employee, onUpgrade, onProtect }) => {
    return (
        <div className="employee-details">

            <img src={employee.avatar} alt={employee.name} className="employee-avatar-large"/>

            <div className="employee-header">
                <div className="employee-info">
                    <h1>{employee.name}</h1>
                    <p className="working">Работает на вас</p>
                </div>
            </div>

            <div>
                <span
                    className="hours-protect">{employee.protected ? `Защищен на ${employee.protectionHours} часов` : 'Не защищен'}</span>
                <span>{employee.rate} /min</span>
            </div>

            <div>

            </div>

            <div className="line">
                <img src={process.env.PUBLIC_URL + "/icons/line.png"} alt="line"/>
            </div>
            <div className="employee-actions">
                <button onClick={() => onUpgrade(employee.id)}>Прокачать за N
                    <img src={`${process.env.PUBLIC_URL}/icons/Монетка золотая право.png`} alt="Coins"
                         className="coin-icon"/>
                </button>
                <button onClick={() => onProtect(employee.id)}>Защитить за N
                    <img src={`${process.env.PUBLIC_URL}/icons/Монетка золотая право.png`} alt="Coins"
                         className="coin-icon"/>
                    на 8 часов
                </button>
            </div>

            <div className="referal-friend">
                <div className="level">
                    C:
                </div>
            </div>
            <div className="referal-friend">
                <div className="level">
                    D:
                </div>
            </div>
            <div className="referal-friend">
                <div className="level">
                    E:
                </div>
            </div>
            <div className="referal-friend">
                <div className="level">
                    F:
                </div>
            </div>
            <div className="referal-friend">
                <div className="level">
                    G:
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;
