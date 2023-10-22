import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import App from './App.jsx';
import Search from './pages/Search.jsx';
import Movie from './pages/Movie.jsx';
import Home from './pages/Home.jsx';
import AudioVisual from './pages/AudioVisual.jsx';
import { SignIn } from './pages/SignIn/indexSignIn.jsx';
import { UserContext } from './context/userContext.jsx';
import CompleteProfile from './pages/perfil/complete-perfil.jsx';

// const PrivateRoute = () => {
//   const { isAutenticated } = useContext (UserContext)
 
//   if (!isAutenticated) return <Navigate to='/login' replace/>
//   return <Outlet/>
// }

export const  Routers = () => {
  return (
    <BrowserRouter> 
        <Routes> 
          <Route element={<App/>}> 
          <Route path='/' element = {<Home/>}/>
          <Route path='/login' element = {<SignIn/>} />
          <Route path='/perfil' element = {<CompleteProfile/>}/>
          {/* <Route element = {<PrivateRoute/>}>           */}
            <Route path='/movie/:id' element = {<Movie/>}/>
            <Route path='/search' element = {<Search/>}/>
            <Route path='/series' element = {<AudioVisual/>}/>

          </Route>
          {/* </Route> */}
        </Routes>
    </BrowserRouter>
  );
};