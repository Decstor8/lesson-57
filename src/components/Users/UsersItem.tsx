import React from 'react';
import { User } from '../../types';

interface Props {
    userProps: User;
}

const UsersItem: React.FC<Props> = ({ userProps }) => {
    return (
        <div className='card mb-2'>
            <div className='card-body'>
                <h5 className='card-title'>Имя: {userProps.name}</h5>
                <p className='card-text small'>Email: {userProps.email}</p>
                <p className='card-text'>Активность: {userProps.isActive}</p>
                <p className='card-text'>Роль: {userProps.category}</p>
            </div>
        </div>
    );
};

export default UsersItem;
