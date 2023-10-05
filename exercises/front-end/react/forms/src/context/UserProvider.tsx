import UserContext from "./UserContext";
import { useState } from "react";

// tipar o children - um nó de componentes filhos 
type UserProviderProps = {
    children: React.ReactNode;
}
function UserProvider({ children }: UserProviderProps) {
    // children: tudo que fica encapsulado pelo provider.

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        city: '',
        bio: ''

    })

    const values = userData;
    return(
        <UserContext.Provider value={values}>
            
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider;