import { createContext } from 'react';
type UserContextType = {
    name: string,
    email: string,
    city: string,
    bio: string
}

const UserContext = createContext({} as UserContextType);

export default UserContext;