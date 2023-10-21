import Drawer from "../../components/Drawer";
import NavBar from "../../components/NavBar";
import "../../components/CompleteProfileForms";
import React,{useContext, useState} from 'react';
import { UserContext, UserProvider } from "../../context/userContext";


const CompleteProfile = () => {

    const {data: user} = useContext();
    
    return(
        <main className='min-h-screen'>
       <NavBar/>
       <Drawer/>

        {session? (
            <div>
                <h1>Formulário para completar o cadastro usando dados da sessão</h1>
                <CompleteProfileForm user={user}/>
            </div>

        ) : (
            <h1>Não logado</h1>

        )}

        </main>
    );
}
export default CompleteProfile;