import {useState} from "react";
import Appbar from './components/Appbar/Appbar';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import { User } from './types';

function App() {
    const [users, setUsers] = useState<User[]>([]);

    const addUser = (user: User) => {
        setUsers((prevUsers) => [...prevUsers, user]);
    };

    return (
        <>
            <header>
                <Appbar />
            </header>
            <main className='container-fluid'>
                <div className='row mt-2'>
                    <div className='col-4'>
                        <UserForm onSubmit={addUser} />
                    </div>
                    <div className='col-8'>
                        <Users users={users} />
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
