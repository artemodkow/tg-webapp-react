import React from 'react';
import './ReferralLink.css';

const ReferralLink = () => {
    const referralLink = "https://sharecoin.com/referral-link"; // Это значение будет получено из API

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(referralLink);
            alert("Ссылка скопирована: " + referralLink); // Или использовать более продвинутое всплывающее уведомление
        } catch (err) {
            console.error('Ошибка при копировании', err);
            alert("Не удалось скопировать ссылку: " + err);
        }
    };

    return (
        <div className="ReferralLink">
            <button onClick={copyToClipboard}>Копировать реферальную ссылку</button>
        </div>
    );
};

export default ReferralLink;
