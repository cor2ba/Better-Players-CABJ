import React from 'react';
import Cartita from './componentes/Jugadores.jsx';
import data from "./data.js";

function App(){
  return(
    <div>
     <div>
       <Cartita
       jugadores={data}
       />
     </div>
    </div>
  );
}

export default App;

