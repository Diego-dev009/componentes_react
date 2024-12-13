import React from 'react';
import AndresImage from '../images/Andres.jpg';

const Andres = () => {
    return (
        <div className="container">
            <h1>¡Hola, soy Andrés! 🐘</h1>
            <img src={AndresImage} alt="Andrés" className="image" />
            <p>
                Mi lenguaje favorito es <strong>C++</strong>. <br />
                La gente dice que tengo muchas capas... <br />
                ¡Pero eso es solo porque manejo tantas clases!
            </p>
        </div>
    );
};

export default Andres;
