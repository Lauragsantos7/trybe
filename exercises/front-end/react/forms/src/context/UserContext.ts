import { createContext } from 'react';
type UserContextType = {
    nome: string,
    email: string,
    cidade: string,
    bio: string
}

const UserContext = createContext({} as UserContextType);

export default UserContext;