import { createContext, useState } from 'react';
import { UserType, UserCountContextType } from './types';

// Create a new context
export const UserHeaderContext = createContext<UserCountContextType>({} as UserCountContextType);

// Create a provider for this context
const UsersInHeaderContext = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<UserType[] | []>([]);

    // Function to add a user
    const addUser = (user: UserType) => {
        setUsers(prevUsers => [...prevUsers, user]);
    };

    // Function to remove a user by index
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
