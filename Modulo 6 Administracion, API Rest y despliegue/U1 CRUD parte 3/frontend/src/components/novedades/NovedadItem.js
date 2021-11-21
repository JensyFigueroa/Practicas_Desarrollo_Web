/* 23 Creamos la carpeta novedades y agregamos NovedadItem.js con el siguiente
codigo  */
/* import React from 'react'; */

const NovedadItem = (props) => {
    const {title, subtitle, body, imagen} = props;

    return (
        <main>
            <div class="holder">
                <div className="novedades">
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <img src= {imagen} />
                    <div dangerouslySetInnerHTML={{ __html: body}}/>
                    <hr/>
                </div>
            </div>
        </main>
    );
}

export default NovedadItem; 