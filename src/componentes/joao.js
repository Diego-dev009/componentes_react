import React from 'react';
import '../App.css'; 
import JhoaImage from '../images/Jhoa.jpg';
const Joao = () => {
    return (
        <div className="container">
            <h1>¡Hola, soy Joao! 🦁</h1>
            <img
                src={JhoaImage}
                alt="Joao"
                className="joao-image"
            />
            <p>
                Mi lenguaje favorito es <strong>C#</strong>. <br />
                Siempre trato de mantenerme en línea... <br />
                ¡Pero a veces me encuentro en un ciclo infinito de decisiones!
            </p>
        </div>
    );
};

export default Joao;
