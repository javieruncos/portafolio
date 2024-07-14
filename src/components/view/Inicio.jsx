import React from 'react';
import '../../assets/style/Inicio.css';
import Tecnologias from '../Ui/Tecnologias';
import Proyecto from '../Ui/Proyecto';
import linkedin from '../../assets/img/linkedin.svg';
import github from '../../assets/img/github.svg';
import gmail from '../../assets/img/gmail.svg';
import wsp from '../../assets/img/whatsapp.svg';
import Contacto from '../Ui/Contacto';


const Inicio = () => {
    return (
        <div className='Inicio'>
            <div className='portadaInicio container'>
                <div className='contenedor-titulo'>
                    <span>Javier Uncos</span>
                    <h1>Frontend Developer</h1>
                </div>
                <div className='contenedor-description mt-3'>
                    <div className='description'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe qui,
                            ullam praesentium mollitia consequatur?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className=' mt-3 container-redes'>
                        <a href="">
                            <img src={linkedin} alt="" className='redes' />
                        </a>
                        <a href="">
                            <img src={github} alt="" className='redes' />
                        </a>
                        <a href="">
                            <img src={gmail} alt="" className='redes' />
                        </a>
                      
                    </div>
                </div>
            </div>
            <section className='container'>
                <div className='tecnologias container'>
                    <div className='container'>
                        <h3>tecnologias</h3>
                    </div>
                    <div>
                        <Tecnologias></Tecnologias>
                    </div>
                </div>
                <div className='container'>
                    <div className='container'>
                        <h3 className=''>Proyectos</h3>
                    </div>
                    <div className='mt-2'>
                        <Proyecto></Proyecto>
                    </div>
                </div>
                <div className='container mt-5'>
                   <Contacto></Contacto>
                </div>
            </section>
        </div>
    );
};

export default Inicio;