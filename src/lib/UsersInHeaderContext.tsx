import { createContext, useState } from 'react';
import { UserType, UserCountContextType } from './types';

export const UserHeaderContext = createContext<UserCountContextType>({} as UserCountContextType);

const UsersInHeaderContext = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<UserType[] | []>([]);

    const addUser = (user: UserType) => {
        setUsers(prevUsers => [...prevUsers, user]);
    };

    const removeUser = (index: number) => {
        setUsers(prevUsers => prevUsers.filter((_, idx) => idx !== index));
    };

    return (
        <UserHeaderContext.Provider value={{ users, addUser, removeUser }}>
            {children}
        </UserHeaderContext.Provider>
    );
};

export default UsersInHeaderContext;
