const Nav = (props) =>{
    return (
        <nav>
        <div class="holder">
            <ul class="menu">
                <li><a class="activo" href="index.html">Home</a></li>
                <li><a href="nosotros.html">Nosotros</a></li>
                <li><a href="#">Recetas</a>
                    <ul class="submenu">
                        <a href="desayunos.html"><li>Desayunos</li></a>
                        <a href="almuerzos.html"><li>Almuerzos</li></a>
                        <a href="cenas.html"><li>Cenas</li></a>
                        <a href="postres.html"><li>Postres</li></a>
                    </ul>
                </li>
                <li><a href="galerias.html">Galeria</a></li>
                <li><a href="novedades.html">Novedades</a></li>
                <li><a href="contacto.html">Contacto</a></li> 
            </ul>
        </div>
    </nav>
    )
}

export default Nav;