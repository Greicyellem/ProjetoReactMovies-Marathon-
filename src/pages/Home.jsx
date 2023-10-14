import React from 'react'
import Footer from '../components/Footer';
 


const Home = () => {

  return (
    <div className='container'>
    <div className='home'>
      <h2 className='title-home'> Bem vindo(a) ao Marathon, onde a sua busca começa!</h2>
      <p className='p-home'>Milhões de filmes e séries para descobrir. Explore já! </p>
      
    </div>   
    <img className='pipoca-home' src='pipoca.png'/>
  
     <Footer> </Footer>

    </div>
  );
};

export default Home;