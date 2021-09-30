import React from 'react';
import { NavLink } from "react-router-dom";
import '../../style/components/layout/Nav.css';
const Nav = (props) =>{
    return (
        <nav>
            <div class="holder">
                <ul class="menu">
                
                    <li><NavLink activeClassName="activo" exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/desayunos">Recetas</NavLink>
                        <ul class="submenu">
                            <NavLink to="/desayunos"><li>Desayunos</li></NavLink>
                            <NavLink activeClassName="activoRecetas" to="/almuerzos"><li>Almuerzos</li></NavLink>
                            <NavLink activeClassName="activoRecetas" to="/cenas"><li>Cenas</li></NavLink>
                            <NavLink activeClassName="activoRecetas" to="/postres"><li>Postres</li></NavLink>
                        </ul>
                    </li>
                    <li><NavLink activeClassName="activo" exact to="/galerias">Galeria</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/novedades">Novedades</NavLink></li>
                    <li><NavLink activeClassName="activo" exact to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;




