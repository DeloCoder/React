//hago IMPORT desde react para q funcione este js 
import React, {useState, Fragment} from 'react';

const Contador = () => {
    
    //meto entre llaves "numero" para darle nomnbre y setNumero para usar las buenas practicas de React y al usar SETnumero indico q voy a modificar "numero"   
    const [numero, setNumero] = useState (0); 
    
    //creo una funcion para usar adentro del Onclick de boton Aumentar
    const aumentar = () => {
         console.log("aumenta numero al presionar boton Aumentar");
         setNumero (numero + 1);
    }
    
    
      //al tener ese return DEBO envolver todo dentro de un DIV
    return (   
        
        //fragment en vez de DIV usa el fragment de arriba para evitar q aparezcan elementos en el HTML  q no estoy usando
        //meto en Button un onClick con el nombre de aumentar para usar la funcion de arriba 
        <Fragment>
        <h3>Mi primer componente {numero}</h3>
        <button onClick= {aumentar}>Aumentar</button> 
        </Fragment>
     );   
}

export default Contador;