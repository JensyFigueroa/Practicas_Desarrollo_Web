/* 4.- importamos las siguientes 2 librerias */
import { useState } from "react"; /* Manejar los estados */
import axios from 'axios'; /* Para las peticiones */

import { NavLink } from "react-router-dom";
import '../../src/style/components/page/contactoPage.css'

const ContactoPage = (props) =>{

    /* 5.- Agregamos el siguiente codigo para el envio de mail */
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica 
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);

        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error == false) {
            setFormData(initialForm)
        }

    }
    /* Fin de codigo de nuevo código */

    return(
        <main>
        <div class="holder">
            <div class="columnas">
                <div class="left">
                    <h2>Contacto Rápido</h2>
                    
                    {/* 6.- Completamos los atributos de la etiqueta form y agregamos onSubmit */}
                    <form action="/contacto" method="post" class="formulario" onSubmit={handleSubmit}>
                        <p>
                            <label for="">Nombre</label>
                            {/* 7.- agregamos name, value y onChange */}
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="">Email</label>
                            {/* 7.- agregamos name, value y onChange */}
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label for="">Teléfono</label>
                            {/* 7.- agregamos name, value y onChange */}
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="">Comentario</label>
                            {/* 7.- agregamos name, value y onChange */}
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </p>
                        <p class="acciones">
                            <input type="submit" value="Enviar" />
                        </p>
                        {/* 8.- Agregamos este operador ternario para que verifique  */}
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                    </form>
                </div>
        
                <div class="right">
                    <h2>Otras vias de contacto</h2>
                    <p>También puedes comunicarte por las siguientes vias...</p>
                    <ul>
                        <li>Teléfono: 9999-9999</li>
                        <li>Email: contacto@lorem-ipsum.com</li><br/>
                        <li><h3>Redes Sociales</h3></li>
  
                        <li><a href="http://www.facebook.com" target="_blank"><i class="fab fa-facebook-square">Facebook</i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-fa-instagram">Instagram</i></a></li>
                        <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter-square">Twitter</i></a></li>

                        {/* <li><NavLink to="www.facebook.com"><i class="fab fa-facebook-square"><span>@Facebook</span></i></NavLink></li>
                        <li><NavLink to="/"><i class="fab fa-instagram"><span>@Instagram</span></i></NavLink></li>
                        <li><NavLink to="/"><i class="fab fa-twitter-square"><span>@Twitter</span></i></NavLink></li> */}
                    </ul>
                </div> 
            </div> 
        </div>
    </main>
    );
}

export default ContactoPage