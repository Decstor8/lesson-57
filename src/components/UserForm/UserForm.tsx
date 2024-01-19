import React, {useState} from 'react';
import {User} from "../../types";
import {CATEGORIES} from "../constants";

interface Props {
    onSubmit: (dish: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        isActive: false,
        category: '',
    });

    const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setUser(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id: Math.random().toString(),
            ...user,
        });
    };

    return (
        <form onSubmit={onFormSubmit}>
            <h4>Пользователь</h4>
            <div className='form-group'>
                <label htmlFor='name'>Имя</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    className='form-control'
                    value={user.name}
                    onChange={changeUser}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='description'>Email</label>
                <input
                    required
                    type='email'
                    name='email'
                    id='email'
                    className='form-control'
                    value={user.email}
                    onChange={changeUser}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='image'>Актив</label>
                <input
                    type='checkbox'
                    name='isActive'
                    id='isActive'
                    className='form-check-input'
                    checked={user.isActive}
                    onChange={changeUser}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='category'>Категория</label>
                <select
                    required
                    name='category'
                    id='category'
                    className='form-select'
                    value={user.category}
                    onChange={changeUser}
                >
                    <option value=''>Select a category</option>
                    {CATEGORIES.map((category) => (
                        <option key={category.value} value={category.value}>
                            {category.label}
                        </option>
                    ))}
                </select>
            </div>

            <button type='submit' className='btn btn-primary mt-3'>Create</button>
        </form>
    );
};

export default UserForm;