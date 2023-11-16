import { createContext } from 'react';

type UserContextType = {
    userName: string,
    userMail: string,
    userCity: string,
    userBio: string,
    setUserName: React.Dispatch<React.SetStateAction<string>>,
    setUserMail: React.Dispatch<React.SetStateAction<string>>,
    setUserCity: React.Dispatch<React.SetStateAction<string>>,
    setUserBio: React.Dispatch<React.SetStateAction<string>>,
   
}

const UserContext = createContext({} as UserContextType);

export default UserContext;