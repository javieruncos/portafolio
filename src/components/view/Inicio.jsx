import React from 'react';
import '../../assets/style/Inicio.css';
import Tecnologias from '../Ui/Tecnologias';
import Proyecto from '../Ui/Proyecto';
import linkedin from '../../assets/img/linkedin.svg';
import github from '../../assets/img/github.svg';
import instagram from '../../assets/img/instagram.svg';
import wsp from '../../assets/img/whatsapp.svg';

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
                    <div className='d-flex justify-content-center gap-5 mt-3'>
                        <a href="">
                            <img src={linkedin} alt="" className='redes' />
                        </a>
                        <a href="">
                            <img src={github} alt="" className='redes' />
                        </a>
                        <a href="">
                            <img src={instagram} alt="" className='redes' />
                        </a>
                        <a href="">
                            <img src={wsp} alt="" className='redes' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='tecnologias container'>
                <div className=''>
                    <h2 className='display-5'>tecnologias</h2>
                </div>
                <div className='mt-3'>
                    <Tecnologias></Tecnologias>
                </div>
            </div>
            <div>
                <h3 className='display-5 text-center'>Proyectos</h3>
                <div className='mt-4'>
                    <Proyecto></Proyecto>
                </div>
            </div>
        </div>
    );
};

export default Inicio;