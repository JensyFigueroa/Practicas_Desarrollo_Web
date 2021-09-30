import { NavLink } from "react-router-dom";
import '../../src/style/components/page/contactoPage.css'

const ContactoPage = (props) =>{
    return(
        <main>
        <div class="holder">
            <div class="columnas">
                <div class="left">
                    <h2>Contacto Rápido</h2>
                    <form action="" method="" class="formulario">
                        <p>
                            <label for="">Nombre</label>
                            <input type="text" />
                        </p>
                        <p>
                            <label for="">Email</label>
                            <input type="email" />
                        </p>
                        <p>
                            <label for="">Teléfono</label>
                            <input type="text" />
                        </p>
                        <p>
                            <label for="">Comentario</label>
                            <textarea name="" id="comentario"></textarea>
                        </p>
                        <p class="acciones">
                            <input type="submit" value="Enviar" />
                        </p>
                    </form>
                </div>
        
                <div class="right">
                    <h2>Otras vias de contacto</h2>
                    <p>También puedes comunicarte por las siguientes vias...</p>
                    <ul>
                        <li>Teléfono: 9999-9999</li>
                        <li>Email: contacto@lorem-ipsum.com</li><br/>
                        <li><h3>Redes Sociales</h3></li>
                        <li><NavLink to="/"><i class="fab fa-facebook-square"><span>@lorem-ipsum</span></i></NavLink></li>
                        <li><NavLink to="/"><i class="fab fa-instagram"><span>@lorem-ipsum</span></i></NavLink></li>
                        <li><NavLink to="/"><i class="fab fa-twitter-square"><span>@lorem-ipsum</span></i></NavLink></li>
                    </ul>
                </div> 
            </div> 
        </div>
    </main>
    );
}

export default ContactoPage