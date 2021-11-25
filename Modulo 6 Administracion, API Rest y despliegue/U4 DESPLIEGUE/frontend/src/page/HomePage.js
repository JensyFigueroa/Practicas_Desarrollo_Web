import '../../src/style/components/layout/Main.css'
const HomePage = (props) =>{
    return(
        <main>
            <div class="holder">
                <img src="/img/recetas1.jpeg" width="95%" height="400" alt=""/>
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fugit atque facere tempora magni doloremque accusantium aperiam. Harum eveniet consequatur autem, praesentium similique, libero inventore excepturi voluptatem error numquam alias voluptatum, et laboriosam cupiditate deleniti odit quisquam mollitia ullam quas. Fugiat eaque blanditiis architecto ipsum illum inventore numquam, aperiam alias.</p>            
            </div>

            <div class="bloque-categorias">
                <ul class="categorias">
                    <li class="categoria">
                        <a href="desayunos.html"><img src="/img/desayuno1.jpeg" alt=""/></a>
                        <span>Recetas para Desayunos</span>
                        <p></p>
                    </li>
                    <li class="categoria">
                        <a href="almuerzos.html"><img src="/img/almuerzo1.jpeg" alt=""/></a>
                        <span>Recetas para almuerzos</span>
                        <p></p>
                    </li>
                    <li class="categoria">
                        <a href="cenas.html"><img src="/img/cena1.jpeg" alt=""/></a>
                        <span>Recetas para Cenas</span>
                        <p></p>
                    </li>
                    <li class="categoria">
                        <a href="postres.html"><img src="/img/postre1.jpeg" alt=""/></a>
                        <span>Recetas para Postres</span>
                        <p></p>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default HomePage;