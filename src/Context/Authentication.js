import React, { useState, useEffect } from 'react';
import { firebaseApp as firebase } from '../Firebase/config';
export const AuthContext = React.createContext();

const Authentication = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setUser);
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Authentication;