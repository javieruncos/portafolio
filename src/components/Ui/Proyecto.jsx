import React from 'react';
import '../../assets/style/Proyecto.css';
import ecommerce from "../../assets/img/proyectos/eccomerce.png";
import futbol from "../../assets/img/proyectos/futbol2.png";
const Proyecto = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-4 col-lg-4'>
                    <div className='card-proyectos'>
                        <div className='contenedor-img'>
                            <img src={ecommerce} alt="" />
                        </div>
                        <div className='description container'>
                           <h3>Ecommerce</h3>
                           <span className='text-secondary'>tecnologia usadas</span>
                           <p>react , bootstrap , react router dom , node js , express</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4 col-lg-4'>
                    <div className='card-proyectos'>
                        <div className='contenedor-img'>
                            <img src={futbol} alt="" />
                        </div>
                        <div className='description container'>
                           <h3>Futbol flash</h3>
                           <span className='text-secondary'>tecnologia usadas</span>
                           <p>react , bootstrap , react router dom</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4 col-lg-4'>
                    <div className='card-proyectos'>
                        <div className='contenedor-img'>
                            <img src={futbol} alt="" />
                        </div>
                        <div className='description container'>
                           <h3>Futbol flash</h3>
                           <span className='text-secondary'>tecnologia usadas</span>
                           <p>react , bootstrap , react router dom</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proyecto;