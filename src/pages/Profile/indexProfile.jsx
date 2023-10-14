import Footer from "../../components/Footer";
import { Input } from "../../components/Input/indexInput";
import { Container, Form, Avatar } from "./stylesProfile";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";


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
                />

                <Input 
                placeholder="E-mail"
                type='text'
                icon={FiMail}
                />

                <Input 
                placeholder="Criar senha"
                type='password'
                icon={FiLock}
                />

                <Input 
                placeholder="Confirmar senha"
                type='password'
                icon={FiLock}
                />

                <button> 
                    Salvar
                </button>

            </Form>

            <Footer/>

        </Container>
    )

}