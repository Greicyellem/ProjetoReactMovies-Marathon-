import styled from "styled-components";
import { AiOutlineCloseCircle, AiOutlineHome } from "react-icons/ai";
import { BiMoviePlay, BiLogIn, BiUser } from "react-icons/bi";



const DrawerContainer = styled.div`
    background: ${({ theme }) => theme.body};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    color: ${({ theme }) => theme.text};
    width: 400px;  
    font-size: 5px;
` 

const Drawer = ({ isOpen, onClose, toggleThemeDark, isThemeDark }) => {
    const drawerStyle = {
        transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    }

    return(
    <DrawerContainer
        style={drawerStyle}
    >

    <div className="check-box"> 
    <div> Alterar tema </div>

     <input
            type="checkbox"
            value=""
            className="check-tema"
            onClick={toggleThemeDark}
            checked={isThemeDark}
        >

        </input>
        </div>

        <div className="menu"> 
        <h5>Menu</h5>
            <button title='Fechar menu' className="button-menu" onClick={onClose} type="button">
            <span className="sr-only"> <AiOutlineCloseCircle/> </span>
        </button>
        </div>
        <div >
            <ul>
                <li className="items-ul">
                    <a href={"/"}>
                        <div >
                        <span className="span-menu"> <AiOutlineHome/> Home </span>
                        </div>
                    </a>
                </li>
                <li className="items-ul">
                    <a href={"/series"}>
                        <div >
                        <span className="span-menu" > <BiMoviePlay/> Filmes e Séries</span>
                        </div>
                    </a>
                </li>
                <li className="items-ul">
                <a href={"/login"}>
                    <div>
                    
                    <span className="span-menu"> <BiLogIn/> Login</span>
                    </div>
                </a>
                </li>
            
                <li className="items-ul">
                <a href={"/perfil"}>
                    <div>
                    <span className="span-menu"> <BiUser/> Crie seu perfil </span>
                    </div>
                </a>
                </li>
            </ul>
        </div>

    </DrawerContainer>

    )
}
export default Drawer;