import React, { useState } from 'react';
import './Players.css';
import Boosts from '../Boosts/Boosts';
import Trade from '../Trade/Trade';

const Players = () => {
    const [currentPage, setCurrentPage] = useState('players');

    const renderContent = () => {
        switch (currentPage) {
            case 'players':
                return <div>Контент страницы Players</div>;
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