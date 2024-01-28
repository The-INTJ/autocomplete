import React from 'react';
import { UserType } from "../lib/types";
import { useContext } from 'react';
import { UserInfoProps } from '../lib/types';
import { UserHeaderContext } from '../lib/UsersInHeaderContext';

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
    // get user info from context
    const { addUser } = useContext(UserHeaderContext);

    function safelyAddUser(user: UserType | undefined) {
        if (user) {
            addUser(user);
        }
    }

    return (
        <>
            <p>
                {user?.name}<br />
                {user?.address?.street}<br />
                {user?.address?.suite}<br />
                {user?.address?.zipcode}
            </p>
            {user && (
                <button onClick={() => safelyAddUser(user)}>
                    Add to header?
                </button>
            )}
        </>
    );
};

export default UserInfo;
