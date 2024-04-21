import React, {useEffect} from 'react';
import MainPage from './components/MainPage/MainPage';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready()
    }, []);

    const onClose = () => {
        tg.close()
    }
    return (
        <div className="App">
            <MainPage />
        </div>
    );
}

export default App;
