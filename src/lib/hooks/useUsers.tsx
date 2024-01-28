import { useEffect, useState } from "react";
import { UserType } from "../types";

export default function useUsers() {
    const [users, setUsers] = useState<UserType[]>([]);

    // API call to the users endpoint
    const getUsers = async (): Promise<UserType[]> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json: UserType[] = await response.json();
        // loop through users, generate custom id
        json.forEach((user, index) => user.id = index + 1);
        return json;
    };

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            setUsers(users);
        };
        fetchUsers();
    }, []);

    return users;
}