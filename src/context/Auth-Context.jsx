import { createContext, useContext } from "react";
import { auth } from "../config/firebase-config";

const AuthFirebaseContext = createContext();

export const useAuth = function() {
    return useContext(AuthFirebaseContext);
}

export const AuthFirebaseProvider = ({children}) => {
    const firebaseAuth = { auth };
    return (
        <AuthFirebaseContext.Provider value={firebaseAuth}>
            {children}
        </AuthFirebaseContext.Provider>
    )
}

