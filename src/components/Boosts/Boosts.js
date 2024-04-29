import React from 'react';
import './Boosts.css';

const Boosts = () => {
    // Здесь должна быть логика или состояние для обработки покупок

    return (
        <div className="boosts-container">
            <header className="boosts-header">
                <h1>Boost</h1>
                <div className="coins">Задания за <span role="img" aria-label="coin">🪙</span></div>
            </header>

            <div className="boosts-tasks">
                <div className="boosts-text">
                    <span className="task">Подписаться на группу</span>
                    <span className="task">+1,000
                    <img src={process.env.PUBLIC_URL + "/icons/Монетка золотая право.png"} alt="Coin"
                         className="coin"/></span>
                    <img src={process.env.PUBLIC_URL + "/icons/vk.png"} alt="Coin"
                         className="icon"/>
                </div>
                <div className="boosts-text">
                    <span className="task">Оценить публикацию</span>
                    <span className="task">+1,000
                        <img src={process.env.PUBLIC_URL + "/icons/Монетка золотая право.png"} alt="Coin"
                             className="coin"/></span>
                    <img src={process.env.PUBLIC_URL + "/icons/ya.png"} alt="Coin"
                         className="icon"/>
                </div>
                <div className="boosts-text">
                    <span className="task">Оценить публикацию</span>
                    <span className="task">+1,000
                    <img src={process.env.PUBLIC_URL + "/icons/Монетка золотая право.png"} alt="Coin"
                         className="coin"/></span>
                    <img src={process.env.PUBLIC_URL + "/icons/telegram.png"} alt="Coin"
                         className="icon"/>
                </div>
            </div>

            <div className="boosts-premium">
                <p>Premium на 12 дней.</p>
                <p>Подписка открывает доступ к эксклюзивным фильтрам во вкладке Players</p>
                <button>Купить за N ₽</button>
            </div>

            <div className="boosts-earnings">
                <p>Ускорение заработка</p>
                <button>2x Купить за N ₽ / 1 час</button>
                <button>5x Купить за N ₽ / 1 час</button>
                <button>10x Купить за N ₽ / 1 час</button>
            </div>
        </div>
    );
};

export default Boosts;
