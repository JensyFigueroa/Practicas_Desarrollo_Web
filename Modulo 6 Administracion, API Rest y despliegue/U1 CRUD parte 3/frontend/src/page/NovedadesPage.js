/* 24- importamos las siguientes librerias + NovedadItem.js modificamos la estructura del html */
import { useState, useEffect } from 'react';
import axios from 'axios'
import NovedadItem from '../components/novedades/NovedadItem';

import '../style/components/page/novedadesPage.css'

const NovedadesPage = (props) =>{

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() =>{
        const cargarNovedades = async () =>{
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return(
        <main>
        <div class="novedades">
            <h1>Novedades</h1>
            
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                title={item.titulo} subtitle={item.subtitulo}
                body={item.cuerpo} imagen={item.imagen} />)
            )}
        </div>
    </main>
    );
}

export default NovedadesPage