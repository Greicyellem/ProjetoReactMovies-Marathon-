import Footer from "../../components/Footer";
import { Input } from "../../components/Input/indexInput";
import { Container, Form, Avatar } from "./stylesProfile";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { UserContext } from "../../context/userContext";
import { useContext } from 'react';

const {user, isAutenticated } = useContext<UserContext>(UserContext) 
const DadosDoUsuario = () => {
    if(isAutenticated) { 
        return user.displayName
    }

    return (<> </>)
}

export function Profile() {
    return(
        <Container> 
            <header>
            <a href='/'>
                    <FiArrowLeft/>
                </a>
            <h1>  Crie seu perfil </h1>
            </header>
            <Form> 
                <Avatar>
                <img 
                src='https://github.com/greicyellem.png'
                alt='Foto do usuário'
                />

                <DadosDoUsuario/>
                
                <label htmlFor="avatar">
                    <FiCamera> </FiCamera>
                    <input 
                    id='avatar'
                    type='file'
                    />
                </label>
                </Avatar>
                <Input 
                placeholder="Nome"
                type='text'
                icon={FiUser}
                required
                />

                <Input 
                placeholder="E-mail"
                type='email'
                icon={FiMail}
                required
                />

                <Input 
                placeholder="Criar senha"
                type='password'
                icon={FiLock}
                required 
                />

                <Input 
                placeholder="Confirmar senha"
                type='password'
                icon={FiLock}
                required
                />

                <button type='submit'> 
                    Salvar
                </button>

            </Form>

            <Footer/>

        </Container>
    )

}