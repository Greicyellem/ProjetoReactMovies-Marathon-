import { createContext, useState } from "react";
import { USUARIO_AUTENTICADO } from '../constantes';
import { getAuth, signOut } from 'firebase/auth';



export const UserContext = createContext()
export const UserProvider = ({ children }) => {
   const [user, setUser] = useState({displayName:'', email:'', photoURL: ''})
   const [isAutenticated, setIsAutenticated] = useState(localStorage.getItem(USUARIO_AUTENTICADO) || false)

   function setUserLocalStorage (autenticado, user) {
        localStorage.setItem(USUARIO_AUTENTICADO, {autenticado, user})
    }

   async function Logout() {
    await getAuth().signOut() 
    localStorage.clear(USUARIO_AUTENTICADO)
    setIsAutenticated(false)
    
}
   const updateUser = (displayName, email, photoURL) => {
    setUser({displayName, email, photoURL})
    setUserLocalStorage(true, {displayName, email, photoURL})
    setIsAutenticated(true)


   }

   return (
    <UserContext.Provider value={{ user, updateUser, isAutenticated, setIsAutenticated, Logout }}>
        {children} 
    </UserContext.Provider>
   )
}



