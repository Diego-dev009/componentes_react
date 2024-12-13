import React from 'react';
import DiegoImage from '../images/Diego.jpg';

const Diego = () => {
    return (
        <div className="container">
            <h1>¡Hola, soy Diego! 🦥</h1>
            <img src={DiegoImage} alt="Diego" className="image" />
            <p>
                Mi lenguaje favorito es <strong>JavaScript</strong>. <br />
                ¡Siempre me tomo mi tiempo para ejecutar cada función!
            </p>
        </div>
    );
};

export default Diego;
