import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const MyContext = createContext();

const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <MyContext.Provider value={allContext}>
            {children}
        </MyContext.Provider>
    );
};

export default AuthProvider;