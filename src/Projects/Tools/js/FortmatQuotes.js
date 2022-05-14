
import '../css/Styles.css'
import Button from './Button';
import Text from '../json/Quotes.json'
import Quotes from './Quotes';
import { useState } from 'react';

const FormatQuotes=()=>{

    //declaracion de funciones 
    
let Random=(min=0,max=quantityQuotes)=>{                        // funcion para creacion de numero random dentro de un rango determinado
  return Math.round(Math.random() * (max - min) + min);         // regresamos el numero random
}
let Neon=()=>{                                                  // funcion para escoger un color aleatorio
    let numeroColor=Random(0,quantityColores)                   // escogemos un color del arreglo colores en la posición random
    setColor(colores[numeroColor])                              // enviamos el nuevo color 
}
let ChangeQuote=()=>{                                           // funcion para escoger una cita aleatoria
    setQuote(Text.quotes[Random()])                             // escogemos o cambiamos la nueva cita
    Neon()                                                      // escogemos o cambiamos el color
}


let quantityQuotes=(Text.quotes).length-1                                                                                       //indicamos la candidad de citas
let colores=["v","a","ao","r","m","r"]    //arreglo de colores
let quantityColores=colores.length-1                                                                                            //indicamos la candidad de colores
const [color,setColor]=useState(colores[Random(0,quantityColores)])                                                             //uso de la funcion state para color
const [quote,setQuote]=useState(Text.quotes[Random()])                                                                          //uso de la funcion state para citas

/* const state=useState(random); 
console.log(state);*/

    return (
            <div className='body containerFiles degraded styleText '>                                                       {/* Creacion de container y asignacion de clases*/}
                <div className={`styleRounded ${color}`}>                                                                   {/* Dando estilo redondeado y color*/}
                <Quotes quote={quote.quote} author={quote.author} />                                                        {/* Usando componente Quotes y enviando datos*/}
                    <div className="containerFiles">                                                                        {/* creando espacio para botones*/}

                    {/* <button onClick={()=>{ChangeQuote()}} className="boton">
                            New Quote
                        </button> */}

                    <Button  inclick={ChangeQuote} quote={quote.quote} author={quote.author} className="boton"/>            {/*usando componente boton con valores para realizar el cambio */}
                    <Button  quote={quote.quote} author={quote.author} link="true" className="boton"/>                      {/*usando componente boton para enviar mensaje a twitter*/}

                    </div>
                </div>
        </div>
        );
}
export default FormatQuotes                                                                                         //se exporta la función de clase