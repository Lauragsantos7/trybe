import UserContext from "./UserContext";
import { useMemo, useState } from "react";

// tipar o children - um nó de componentes filhos 
type UserProviderProps = {
    children: React.ReactNode;
}
function UserProvider({ children }: UserProviderProps) {
    // children: tudo que fica encapsulado pelo provider.
    
    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userCity, setUserCity] = useState('');
    const [userBio, setUserBio] = useState('');
    
    const values = useMemo(() => ({
        userName,
        userMail,
        userCity,
        userBio,
        setUserName,
        setUserMail,
        setUserCity,
        setUserBio }),
        [userName, userMail, userCity, userBio, setUserName, setUserMail, setUserCity, setUserBio]);
        // useMemo - ficam salvos na memória os param para não precisar renderizar toda vez, apenas qdo forem atualizados.
    

    return(
        <UserContext.Provider value={values}>
            
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider;