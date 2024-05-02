import React from 'react';
import './Trade.css'

const Trade = () => {
    const members = [
        { level: 'B', membersCount: 'N чел.' },
        { level: 'C', membersCount: 'N чел.' },
        { level: 'D', membersCount: 'N чел.' },
        { level: 'E', membersCount: 'N чел.' },
        { level: 'F', membersCount: 'N чел.' },
        { level: 'G', membersCount: 'N чел.' }
    ];

    return (
        <div className="balance-container">
            <header className="balance-header">
                Balance
            </header>
            <div className="balance-amount">
                4,335
                <span>
                    <img src={process.env.PUBLIC_URL + "/icons/star.png"} alt="Star" className="Star"/>
                </span>
            </div>
            <div className="header-stats">
                Статистика:
            </div>
            <div className="members-list">
                {members.map(member => (

                    <div key={member.level} className="member-item">
                        {member.level}: {member.membersCount}
                    </div>

                ))}
            </div>
            <button className="trade-button">
                Trade
            </button>
            <div>
                <button className="rules-button">
                    <a
                        href="https://t.me/share/url?url=https://t.me/sharecointestbot&text"
                        target="_blank"
                        className="rules-link"
                    >
                        Правила пользования
                    </a>
                </button>
            </div>

        </div>
    );
};

export default Trade;
