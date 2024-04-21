import React from 'react';
import UserBalance from '../UserBalance/UserBalance';
import ReferralLink from '../ReferralLink/ReferralLink';
import UserList from '../UserList/UserList';
import './MainPage.css';

const MainPage = () => {
    return (
        <div className="MainPage">
            <UserBalance />
            <ReferralLink />
            <UserList />
        </div>
    );
};

export default MainPage;
