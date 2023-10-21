import { Container, Form, Background } from '../SignIn/stylesSignIn';
import Footer from '../../components/Footer';
import { FcGoogle } from 'react-icons/fc'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../services/firebase'
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext';


export function SignIn(){
     
    const {user, updateUser, Logout, isAutenticated} = useContext (UserContext)
    
    async function handleGoogleSingIn() {
       const provider = new GoogleAuthProvider();

       const {user: { displayName, email, photoURL }} = await signInWithPopup(auth, provider)
       if (displayName) {
        updateUser(displayName, email, photoURL)
       }
    }

    if (isAutenticated) {

    return (
        <Container> 
            <Form> 

            <h1> Logado como: </h1>

                <div className='dados-user'>
                    <img 
                    className='foto-user'
                    src={user.photoURL}
                    width={100}
                    height={100}
                    />

                
                <span> {user.displayName} </span>
                <span> {user.email} </span>
                </div>

             
                <button type='button' className='button-login' onClick={Logout}> Sair da conta </button>                
                <a href="/perfil">
                    Criar conta
                </a>
            </Form>
            <Background> </Background>

            <Footer> </Footer>

        </Container>
    )
}

return (
    <Container> 
        <Form> 
        <h1> Login de usuário </h1>
        <h2> Faça login e inicie a busca da sua próxima Maratona! </h2>
            <button type='button' className='button-login' onClick={handleGoogleSingIn} >
            Entrar com o Google  
            <FcGoogle/> </button>
            <a href="/profile">
                Criar conta
            </a>
        
        </Form>

        <Background> </Background>

        <Footer> </Footer>


    </Container>
)
}