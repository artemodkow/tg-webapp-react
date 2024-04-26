import React from 'react';

const ShareButton = ({ url }) => {
    const share = () => {
        if (navigator.share) {
            navigator.share({
                url: url,
            });
        } else {
            // Fallback для браузеров без navigator.share
            window.open("https://telegram.org/js/telegram-widget.js?22", '_blank');
        }
    };

    return (
        <button onClick={share} className="share-button">
            Поделиться
        </button>
    );
};

export default ShareButton;
