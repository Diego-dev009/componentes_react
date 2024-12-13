import React from 'react';
import './App.css';
import Andres from './componentes/andres';
import Diego from './componentes/diego';
import Joao from './componentes/joao';
import Pepillo from './componentes/pepillo';
import Ricardo from './componentes/ricardo';
import Helmer from './componentes/Helmer'; 




function App() {
  return (
    <div className="app-container">

      <main className="app-main">
        <Pepillo />
        <Ricardo />
        <Andres />
        <Diego />
        <Joao />
        <Helmer /> 
      </main>
    </div>
  );
}

export default App;
