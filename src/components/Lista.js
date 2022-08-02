import React, {useState, Fragment} from 'react'

const Lista = () => {
    //agrego al array con los "...arrayNumero, " Los 3 puntitos AGREGAN
    // recordar q setNumero es el modificador, q le pongo el nombre q quiero y se 
    //recomienda setXXX como buena practica
    
    const [arrayNumero, setArrayNumero] = useState([1,2,3,4,5,6])
    const [numero, setNumero] = useState (7)
    
    const agregarElemento = () => {
        
        setNumero(numero + 1)
       
        setArrayNumero([
            ...arrayNumero, 
            numero    
        ])
    }
    
    
    
    return (
        <Fragment>
            <h2>LISTA</h2>
            <button onClick ={agregarElemento}>Agregar</button>
            
            {
                arrayNumero.map((item, index) => 
                <p key={index}> {index} - {item}</p>
                )
            }   
        
        </Fragment>
   
    );
}

export default Lista;