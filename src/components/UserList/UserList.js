import React from 'react';
import UserCard from '../UserCard/UserCard'; // Вам нужно будет создать UserCard компонент
import './UserList.css';

const UserList = () => {
    const users = [
        // Предположим, что данные получены из API
        { id: 1, name: 'Михаил Зубков', income: 348 },
        { id: 2, name: 'Лана Белён', income: 1000 }
    ];

    return (
        <div className="UserList">
            {users.map(user => (
                <UserCard key={user.id} name={user.name} income={user.income} />
            ))}
        </div>
    );
};

export default UserList;
