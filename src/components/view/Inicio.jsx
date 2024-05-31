import React from 'react';
import '../../assets/style/Inicio.css';
import Tecnologias from '../Ui/Tecnologias';
import Proyecto from '../Ui/Proyecto';


const Inicio = () => {
    return (
        <div className='Inicio'>
            <div className='portadaInicio container'>
                <div className='contenedor-titulo'>
                    <span>Javier Uncos</span>
                    <h1>Frontend Developer</h1>
                </div>
                <div className='contenedor-description mt-3'>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe qui,
                            ullam praesentium mollitia consequatur?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className='d-flex justify-content-center gap-5'>
                        <a href="">links</a>
                        <a href="">links</a>
                        <a href="">links</a>
                        <a href="">links</a>
                    </div>
                </div>
            </div>
            <div className='tecnologias container my-5'>
                <div className='mt-3'>
                    <h2 className='display-5'>tecnologias</h2>
                </div>
                <div className='mt-5'>
                    <Tecnologias></Tecnologias>
                </div>
            </div>
            <div>
                <h3 className='display-5 text-center'>Proyectos</h3>
                <div className='mt-5'>
                    <Proyecto></Proyecto>
                </div>
            </div>
        </div>
    );
};

export default Inicio;