import React,{useState, useEffect, useRef, useContext} from "react";
import { useForm } from 'react-hook-form'
import AvatarEditor from "react-avatar-editor";
import { UserContext } from "../context/userContext";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { FcPhoneAndroid } from "react-icons/fc";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiPhotoAlbum, BiUser } from "react-icons/bi";


const ZoomSlider = ({zoom, onZoomChange}) => {
    return (
        <input
        type='range'
        min='1'
        max='10'
        step='0.1'
        value={zoom}
        onChange={(e) => onZoomChange(parseFloat(e.target.value))}
        />
    );
};

const CompleteProfileForm = () => {

    const {register, setValue} = useForm();
    const [editedImage, setEditedImage] = useState(null);
    const [zoom, setZoom] = useState(2);
    const editorRef = useRef(null);

const {user} = useContext (UserContext)

// console.log(user)

    useEffect(() => {
         setValue('name', user.displayName)
         setValue('email', user.email);
        

    }, [user, setValue] )

    const handleZoomChange = (newZoom) => {
        setZoom(newZoom)
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setEditedImage(file);
    };

    const handleImageCrop = () => {
        if(editorRef.current){
            const canvas = editorRef.current.getImageScaledToCanvas();
            canvas.toBlob((blob) => {
                setEditedImage(blob);
            });
        }
    };

    const handleSave = () => {
        handleImageCrop();
        setEditedImage(null);
    };

    const handleCancel = () => {
        setEditedImage(null)
    };

    const onSubmit = (data) => {

    }

    return(
        <div> 
       <form className="input">
        
            <div className="form-input">
                <label className="dados-input" htmlFor='name'> 
                <BiUser/> 
                </label>
                <input {...register('name')}
                value={user.displayName}
                id='name'
                placeholder="Nome"
                required
                />
            </div>
            
            <div className="form-input">
            <label className="dados-input" htmlFor='email' > 
            <AiOutlineMail/>
                </label>
                <input {...register('email')}
                id='email'
                placeholder="Email"
                required
                />
            </div>

            <div className="form-input">
            <label className="dados-input" htmlFor='phone'> 
                <FcPhoneAndroid/>
                </label>
                <input {...register('phone')} 
                id='phone' 
                placeholder="Telefone"
                required
                />
               
            </div>

            <div className="form-input">

            <label className="dados-input" htmlFor='password'> 
            <AiFillLock/>
            </label>
               <input {...register('password')} 
               placeholder="Criar senha"
                type='password'
                required 
              />

                </div>

            <div className="form-input">
            <label className="dados-input" htmlFor='image'> 
            <BiPhotoAlbum/>  
                </label>
                <input type='file' 
                accept="image/*" 
                onChange={handleImageChange} 
                id='image'
                />
            </div>

            {editedImage && (
                <> 
                <AvatarEditor
                ref={editorRef}
                image={editedImage}
                width={150}
                height={150}
                border={5}
                color={[255,255,255,0.6]}   
                rotate={0}
                scale={zoom}
                
                />
                <ZoomSlider zoom={zoom} 
                onZoomChange={handleZoomChange}
                >
                </ZoomSlider>
                
                <div> 
                <button className="bottom-input" type='submit' onClick={handleCancel}>
                    Cancelar
                </button>
                </div>

                </>
            )}

            <div > 
            <form> 
                <button className="bottom-input" type='submit' title='Salvar dados para cadastro'>
                    Salvar
                </button>
            </form>
            </div>

        </form>
    </div>
    );
};
export default CompleteProfileForm;

