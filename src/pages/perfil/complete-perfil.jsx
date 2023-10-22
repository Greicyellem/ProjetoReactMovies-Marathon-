import CompleteProfileForm from "../../components/CompleteProfileForm";
import Footer from "../../components/Footer";



const CompleteProfile = () => {
    
    return(
        <section>
            <div className="cadastro">
                <h1>Faça seu cadastro!</h1>
                <img className="img-profile" src='perfil.png'/>
            </div>

            <CompleteProfileForm/>

            <Footer/>

        </section>
    );
}
export default CompleteProfile;