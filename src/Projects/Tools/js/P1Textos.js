import './Estilos.css'

const Cards=({titulo,primer, segundo, tercero,color})=>{
    return (
        <div className={`${color} card`}>
            <p>
                {titulo}
            </p>

            <p>
                {primer}
            </p>

            <p>
                {segundo}
            </p>
            <p>
                {tercero}
            </p>

        </div>
        );
}
export default Cards