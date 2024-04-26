// App.js
import React from 'react';
import Players from './components/Players/Players';
import './App.css';

const App = () => {
    useEffect(() => {
        // Функция для загрузки скрипта
        const loadScript = (url) => {
            const script = document.createElement('script');
            script.src = url;
            script.async = true;
            document.body.appendChild(script);
        };

        // Загружаем скрипт
        loadScript("https://telegram.org/js/telegram-web-app.js");



        // Очистка перед удалением компонента
        return () => {
            // Удаляем скрипт при размонтировании компонента
            document.body.removeChild(document.body.lastChild);
        };
    }, []);
    return (
        <div className="App">
            <Players />
        </div>
    );
};

export default App;
