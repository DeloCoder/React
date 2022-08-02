 import React, {Fragment} from 'react';
 
  
 const JSX = () => {

        //hago k saludo
       // a) const saludo = '¡hola JSX!';
       const temperatura = 195
        
        return (
            // a) al meter {saludo} llamo  a la const de arriba y lo agrego al H2
           //a)  <h2>Soy un H2 copado {saludo}</h2>
            <Fragment>
           <h2>Frio o calor?</h2>;
           <h4>
                {
                    temperatura >= 20 ?  'CALOR!' :  'FRIO!'
                }
           </h4>
           </Fragment>

        );
  };

  export default JSX;