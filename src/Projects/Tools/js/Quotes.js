import '../css/Styles.css'

const Quotes=({quote,author})=>{                            //se reciben datos

    return (
        <div >
                <p>" {quote}"</p>                           {/* mostramos la cita */}
                <div className="alignmentRight">            {/* se alinea a la derecha*/}
                    {author}                                {/* mostramos el autor*/}
                </div>
                <br />
        </div>
        );
}

export default Quotes                                       // Se exporta la cita