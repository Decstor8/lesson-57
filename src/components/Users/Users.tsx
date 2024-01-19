import React from 'react';
import UsersItem from './UsersItem';
import { User } from '../../types';

interface Props {
    users: User[];
}

const Users: React.FC<Props> = ({ users }) => {
    return (
        <>
            <h4>Login</h4>
            {users.map(user => (
                <UsersItem key={user.id} userProps={user} />
            ))}
        </>
    );
};

export default Users;
