import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Search from './pages/Search.jsx'
import Movie from './pages/Movie.jsx'
import Home from './pages/Home.jsx'
import AudioVisual from './pages/AudioVisual.jsx'
import { SignIn } from './pages/SignIn/indexSignIn.jsx'
import { Profile } from './pages/Profile/indexProfile.jsx'

export const  Routers = () => {
  return (
    <BrowserRouter> 
        <Routes> 
          <Route element={<App/>}> 
            <Route path='/' element = {<Home/>}> </Route>
            <Route path='/movie/:id' element = {<Movie/>}> </Route>
            <Route path='/search' element = {<Search/>}> </Route>
            <Route path='/series' element = {<AudioVisual/>}> </Route>
            <Route path='/login' element = {<SignIn/>} />
            <Route path='/profile' element = {<Profile/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
};