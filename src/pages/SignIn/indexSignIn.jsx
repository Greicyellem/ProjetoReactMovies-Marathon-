import { Container, Form, Background } from '../SignIn/stylesSignIn';
import { Input } from '../../components/Input/indexInput';
import { FiMail, FiLock } from 'react-icons/fi'
import Footer from '../../components/Footer';
import { FcGoogle } from 'react-icons/fc'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../services/firebase';


export function SignIn(){
    function handleGoogleSingIn() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user);
        })

        .cath((error) => {
            console.log(error);
        })

    }
    return (
        <Container> 
            <Form> 
                <h1> Login de usuário </h1>

                <h2> Faça seu login </h2>
                <Input
                placeholder='E-mail'
                type='text'
                icon={FiMail}
                />

                <Input
                placeholder='Senha'
                type='password'
                icon={FiLock}
                />

                <button type='button'> Entrar </button>

                <button type='button' className='button-login' onClick={handleGoogleSingIn}>
                
                Entrar com o google  
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