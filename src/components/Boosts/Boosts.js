import React from 'react';
import './Boosts.css';

const Boosts = ({ onBackClick}) => {
    // Здесь должна быть логика или состояние для обработки покупок
    return (
        <div className="boosts-container">
            <header className="boosts-header">
                <div className="back-button-container">
                    <button className="back-button" onClick={onBackClick}></button>
                </div>
                <div className="text-head">
                Boost
                </div>
            </header>
            <header className="boosts-header">
                <div className="task-header">
                    <div className="text-header">
                        Задания за
                    </div>
                    <img src={process.env.PUBLIC_URL + "/icons/Монетка золотая право.png"} alt="Coin"
                         className="coin-in-header"/>
                </div>
            </header>

            <div className="boosts-tasks">
                <div className="boosts-text">
                    <span className="task">Подписаться на группу </span>
                    <span className="task"> <img src={process.env.PUBLIC_URL +
                        "/icons/Монетка золотая право.png"} alt="Coin" className="coin"/> +1,000
                    </span>
                    <a
                        className="icon"
                        href="https://vk.com"
                        target="_blank"
                    >
                        <img src={process.env.PUBLIC_URL + "/icons/vk.png"} alt="Coin"/>
                    </a>
                </div>
                <div className="boosts-text">
                    <span className="task">Оценить публикацию</span>
                    <span className="task"><img src={process.env.PUBLIC_URL +
                        "/icons/Монетка золотая право.png"} alt="Coin" className="coin"/>+1,000
                    </span>
                    <a
                        className="icon"
                        href="https://dzen.ru"
                        target="_blank"
                    >
                        <img src={process.env.PUBLIC_URL + "/icons/ya.png"} alt="Coin"/>
                    </a>
                </div>
                <div className="boosts-text">
                    <span className="task">Оценить публикацию</span>
                    <span className="task">
                        <img src={process.env.PUBLIC_URL + "/icons/Монетка золотая право.png"} alt="Coin"
                             className="coin"/>
                        +1,000
                    </span>
                    <a
                        className="icon"
                        href="https://weba.telegram.org"
                        target="_blank"
                    >
                        <img src={process.env.PUBLIC_URL + "/icons/telegram.png"} alt="Coin"/>
                    </a>
                </div>
            </div>
                <div className="line">
                <img src={process.env.PUBLIC_URL + "/icons/line.png"} alt = "line"/>
            </div>
            <div className="boosts-premium">
                <span className="premium-gradient">Premium</span><span
                className="text-header-premium"> на 12 дней.</span>
                <div className="text-in-premium">Подписка открывает доступ к эксклюзивным фильтрам во вкладке Players</div>
                <a
                    href="https://weba.telegram.org"
                    target="_blank"
                >
                    <button>
                        <span className="text-button">
                        Купить за 199 ₽</span>
                    </button>
                </a>

            </div>

            <div className="boosts-earnings">
                <span className="text-in-earn">Ускорение заработка  <img src={process.env.PUBLIC_URL +
                    "/icons/Монетка золотая фронт.png"} alt="Coin" className="coin-in-earn"/></span>
                <div>
                    <div>
                        <span className="Nx">2x</span>
                        <a
                            href="https://weba.telegram.org"
                            target="_blank"
                        >
                            <button>Купить за N ₽ / 1 час</button>
                        </a>

                    </div>
                    <div>
                        <span className="Nx">5x</span>
                        <a
                            href="https://weba.telegram.org"
                            target="_blank"
                        >
                            <button>Купить за N ₽ / 1 час</button>
                        </a>
                    </div>
                    <div>
                        <span className="Nx">10x</span>
                        <a
                            href="https://weba.telegram.org"
                            target="_blank"
                        >
                            <button>Купить за N ₽ / 1 час</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Boosts;
