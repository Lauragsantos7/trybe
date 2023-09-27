import UserContext from "./UserContext";

function UserProvider({ children }) {
    // children: tudo que fica encapsulado pelo provider.
    return(
        <UserContext.Provider value={}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider;