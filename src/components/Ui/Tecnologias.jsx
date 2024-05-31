import React from 'react';
import "../../assets/style/Tecnologias.css";
import { arregloLogos } from '../../helpers/logos';

const Tecnologias = () => {

    return (
        <div className='container'>
            <div className='row'>
                {
                  arregloLogos.map((logo, index) => {
                    return (
                        <div className='col-12 col-md-3 col-lg-4'>
                            <div className='card-stack'>
                                <img src={logo.src} alt={logo.nombre} />
                            </div>
                        </div>
                    )
                  })
                }
            </div>
        </div>
    );
};

export default Tecnologias;