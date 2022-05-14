
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Button=({text="New Quote",inclick,quote,author,link=false})=>{//se reciben valores

    return (
        <div >
                <button className="boton" onClick={inclick}>        {/* se crea boton que recibira valor al presionarlo */}
                {link?<a href={`https://twitter.com/intent/tweet?text=menssage: "${quote}" to author ${author} &url=http%3A%2F%2Facademlo.com&hashtags=programación,html`} target="_blank" className="boton" >        {/* si el valor de link es verdad redireccionara el mensaje a twitter caso contrario mostrara texto */}
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </a>:text}
                </button>
        </div>
        );
}

export default Button                                           //Se Exporta boton