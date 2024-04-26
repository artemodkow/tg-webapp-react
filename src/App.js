// App.js
import React, {useEffect} from 'react';
import Players from './components/Players/Players';
import './App.css';
import {usetelegram} from "./components/hooks/usetelegram";


const App = () => {
    const tg = window.Telegram.WebApp;
    return (
        <div className="App">
            <Players />
        </div>
    );
};

export default App;
