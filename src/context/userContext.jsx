import { createContext, useState, useEffect } from "react";
import { USUARIO_AUTENTICADO } from '../constantes';
import { getAuth, signOut } from 'firebase/auth';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
   const [user, setUser] = useState({ displayName: '', email: '', photoURL: '' });
   const [isAutenticated, setIsAutenticated] = useState(localStorage.getItem(USUARIO_AUTENTICADO) === 'true' || false);

   // Função para salvar o usuário no localStorage
   const setUserLocalStorage = (autenticado, userData) => {
      localStorage.setItem(USUARIO_AUTENTICADO, autenticado);
      localStorage.setItem('userData', JSON.stringify(userData));
   }

   // Função para carregar o usuário do localStorage
   const loadUserFromLocalStorage = () => {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (userData) {
         setUser(userData);
      }
   }

   // Efeito para carregar o usuário do localStorage ao montar o componente
   useEffect(() => {
      loadUserFromLocalStorage();
   }, []);

   async function Logout() {
      await getAuth().signOut();
      localStorage.clear();
      setIsAutenticated(false);
   }

   const updateUser = (displayName, email, photoURL) => {
      const userData = { displayName, email, photoURL };
      setUser(userData);
      setUserLocalStorage(true, userData);
      setIsAutenticated(true);
   }

   return (
      <UserContext.Provider value={{ user, updateUser, isAutenticated, setIsAutenticated, Logout }}>
         {children}
      </UserContext.Provider>
   );
}
