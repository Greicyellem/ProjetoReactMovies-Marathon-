import CompleteProfileForm from "../../components/CompleteProfileForm";
import Footer from "../../components/Footer";



const CompleteProfile = () => {
    
    return(
        <main>
            <div className="cadastro">
                <h1>Faça seu cadastro!</h1>
                <img className="img-profile" src='perfil.png'
                />
            </div>

            <CompleteProfileForm/>

            <Footer/>

        </main>
    );
}
export default CompleteProfile;