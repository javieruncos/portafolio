import React from 'react';
import "../../assets/style/Tecnologias.css";
import { arregloLogos } from '../../helpers/logos';

const Tecnologias = () => {

    return (
        <div className='container'>
            <div className='container'>
                <h3>tecnologias</h3>
            </div>
            <div className='row'>
                {
                    arregloLogos.map((logo, index) => {
                        return (
                            <div className='col-4 col-md-3 col-lg-4' key={index}>
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