import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    font-family: 'Young Serif', serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    background-image: url('back.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-blend-mode: luminosity;
    backface-visibility: hidden;
}

a {
    text-decoration: none;
    transition: .7s;
    color: ${({ theme }) => theme.text};
}

a:hover{   
    transform: scale(1.1)   
}

.movies-container div a {
    border-radius: 8px;
    color: ${({ theme }) => theme.text};
    padding: 20px 0px;
    align-items: center;
    transition: .6s;
    text-align: center;
    font-weight: bold;
}

.movies-container div{
    width: 24%;
    color: ${({ theme }) => theme.text};
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${({ theme }) => theme.body};
    padding: 1rem;
    border-radius: 10px;
    padding: 15px 15px;
    transition: 0.5s;
    border: 2px solid #f7d354;

}

.container .title {
    color: ${({ theme }) => theme.text};
    font-size: 2.5rem;
    text-align: center;
    margin: 2rem 0 1rem;

}

.home {
    display: flex;
    flex-direction: column;
    align-items: start;
    text-shadow: 0 0 0.2em rgb(27, 10, 139), 0 0 0.2em rgb(9, 23, 85), 0 0 0.2em rgb#ffffff;
    color: #37415d;
    border-radius: 4px;
    margin: 50px;
    color: white;
}

.pipoca-home {
    width: 700px;

}

.dados-user {
    font-size: 20px;
    display: flex;
    flex-direction: column;
}

.title-home {
    font-size: 35px;
    padding: 10px;
    align-self: center;
    background-color: #727d99;
    border-radius: 10px;

}

.p-home {
    font-size: 25px;
    padding: 10px;
    ${({ theme }) => theme.text};
    align-self: center;
    background-color: #727d99;
    border-radius: 10px;
}

.button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 50px;
    gap: 45px ;
    color: ${({ theme }) => theme.text};
}

.button-fs {
    padding: .2rem .8rem;
    border-radius: 8px;
    border: none;
    font-size: 25px;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    transition: .5s;
    background: ${({ theme }) => theme.body};
}

.button-fs:hover {

    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transform: scale(1.3); 
    border: 1px solid white;
}

.movie-page {
    color: ${({ theme }) => theme.text};
    display: grid;
    flex-direction: column;
    max-width: 600px;
    margin: 2rem auto;
    padding-bottom: 80px;
}

  .movie-page svg {
    font-size: 1.5rem;
    color: #f7d354;
}

.details {
    background-color: #988647;
}

.details:hover {
    background-color: #988647;
}

  
  .movie-page .movie-card {
    text-align: center;;
}

  .movie-page .movie-card img{
    width: 400px;
    border: 2px solid #f7d354;
    border-radius: 15px;
  }

  .movie-page .movie-card h2, 
  .movie-page .movie-card p { 
      margin-bottom: 1.5rem;
  }
  
  .movie-page .movie-card h2 {
    font-size: 2.5rem;
  }

  .movie-page .movie-card p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
  }
  
  .tagline {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
  
  .info {
    margin-bottom: 1.5rem;
    background: ${({ theme }) => theme.body};
    border-radius: 15px;
    margin: 10px 10px;
    padding: 15px 15px;
    border: 2px solid #f7d354;
  }
  
  .info h3 {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
  
  .description {
    margin-bottom: 10rem;
  }
  
  .description p {
    line-height: 1.6rem;
    font-size: 1.2rem;
  }

.title .query-text {
    color: #f7d354;
}

.movies-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 80px;
}

.movies-container div:hover {
    transform: scale(1.1);
}


.movies-container div img{
    max-width: 100%;
    border-radius: 10px;
}

.movies-container div img,
.movies-container div p,
.movies-container div h2 {

    margin-bottom: 1rem;
    text-align: center;
}

.movies-container div svg{
    color: #f7d354
}

.movies-container div a:hover {
    background-color: #f7d354;
    padding: 10px auto;
    color: #586077;
    cursor: url("./popcorn-cursor.svg"), auto;

}

#navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:  1rem 2rem;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text}; 

}

#navbar h2 a {
    display: flex;
    align-items: center;
    gap: 1rem ;
    color: ${({ theme }) => theme.text};
    background: transparent;
}

#navbar form {
    display: flex;
    gap: 2rem;
}

#navbar input {
    padding: 12px 20px;
    border-radius: 8px;
    border: none;
    background-color: whitesmoke ;
}

#navbar input:hover {
    transform: scale(1.1); 
    transition: .8s;
}

.menu {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    margin: 30px;
    font-size: 30px;
    color: ${({ theme }) => theme.text};
    border-bottom: 1px solid #586077 ;
}   

.button-menu {
    border: none;
    background: transparent;
    font: bold;
    font-size: 30px;
    transition: 0.5s;
    color: ${({ theme }) => theme.text};
}

.button-menu:hover {
    transform: scale(1.3); 
}

.span-menu {
    padding: 8px;
    margin: 30px;
    line-height: 70px;
    font-size: 22px;
    color: ${({ theme }) => theme.text};
    font-weight: 700;

}

.items-ul {
    transition: 0.5s;
}

.items-ul:hover {
    transform: scale(1.1); 
    background-color: #909dc0;
    width: 95%;
    border-radius: 4px;
}

.check-box{ 
    display: flex;
    flex-direction: row;
    font-size: 20px;
    justify-content: start;
    margin: 30px;
    gap: 10px;
    color: ${({ theme }) => theme.text};
    font-weight: 700;
    padding: 8px;

}

.check-tema{
    width: 23px;
    height: 23px;
}

.button-login {
    width: 400px;
    background: none;
    align-items: center;
    justify-content: center;
}

.footer {
    background: ${({ theme }) => theme.body};
  padding: 1em;
  text-align: center; 
  width: 100%;
  height: 80px;
  bottom: 0;
  left: 0;  
  position: fixed;
  border-bottom: 1px solid #727d99 ;

}

.social_list {
  display: flex;
  justify-content: center;
  list-style-type: none;
}

.social_list li {
  margin: 0 1em;
  cursor: pointer;
  transform: scale(1);
  transition: 0.5s;
  cursor: pointer;
}

.social_list li:hover {
  transform: scale(1.5);

}

.social_list svg {
  font-size: 1.5em;
  cursor: pointer;
}

.copy_right {
  margin-top: 5px;
  color: ${({ theme }) => theme.text};
}

.copy_right span {
    color: ${({ theme }) => theme.text};
}

`;



