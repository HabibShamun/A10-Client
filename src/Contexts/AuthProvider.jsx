import { AuthContext } from "./AuthContext";

//npm install -g firebase-tools

import { auth } from "../firebase/firebase.config";



const AuthProvider = ({children}) => {
    return (
       <AuthContext>
         {children}
       </AuthContext>
    );
};

export default AuthProvider;