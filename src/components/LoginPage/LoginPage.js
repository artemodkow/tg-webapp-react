import React, { useState } from 'react';
import axios from 'axios';
import MainPage from '../MainPage/MainPage';

const LoginPage = () => {
    const [referralLink, setReferralLink] = useState('');
    const [isPaymentVisible, setIsPaymentVisible] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handlePayment = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.post('https://your-api-url.com/pay', {
                // Параметры вашего запроса
                referral: referralLink,
            });
            if (response.data.success) {
                setIsLoggedIn(true);
            } else {
                setError('Ошибка оплаты. Пожалуйста, попробуйте еще раз.');
            }
        } catch (error) {
            setError('Ошибка соединения с сервером.');
        }
        setIsLoading(false);
    };

    const handleReferralSubmit = (event) => {
        event.preventDefault();
        setIsPaymentVisible(true); // Показать форму оплаты
    };

    if (isLoggedIn) {
        return <MainPage />;
    }

    return (
        <div className="login-page">
            <h1>ShareCoin</h1>
            {!isPaymentVisible ? (
                <form onSubmit={handleReferralSubmit}>
                    <input
                        type="text"
                        placeholder="Вставьте реферальную ссылку (если имеется)"
                        value={referralLink}
                        onChange={(e) => setReferralLink(e.target.value)}
                    />
                    <button type="submit">Продолжить</button>
                </form>
            ) : (
                <form onSubmit={handlePayment}>
                    <p>Оплата для доступа к игре</p>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Оплата...' : 'Оплатить и войти'}
                    </button>
                </form>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default LoginPage;
