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
        <div className='Inicio' id='inicio'>
            <div className='portadaInicio container'>
                <div className='contenedor-titulo container'>
                    <span>Javier Uncos</span>
                    <h1>Frontend Developer</h1>
                </div>
                <div className='contenedor-description mt-3 container'>
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
            <section id='tecnologias' className='pt-5 mt-5'>
                <article>
                    <div className='tecnologias container'>

                        <div>
                            <Tecnologias></Tecnologias>
                        </div>
                    </div>
                </article>
            </section>
            <section className='pt-5' id='proyectos'>
                <article className='pt-5 mt-4'>
                    <Proyecto></Proyecto>
                </article>
            </section>
            <section className='container' id='tecnologias'>
                <div className='container py-5'>
                    <div className='contacto container'>
                        <div className='container-form my-4'>
                            <div id='sobreMi'>
                                <h3 className='fs-1'>Sobre mi</h3>
                                <p className='fs-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quia, earum! Explicabo, eos eaque. Sapiente accusantium perferendis
                                    incidunt animi. Fugiat esse ullam corrupti doloribus quaerat beatae
                                    iure, dicta nesciunt magnam eaque voluptatem veniam molestias dignissimos
                                    voluptate quia porro sit exercitationem praesentium vero dolorum maiores
                                    necessitatibus magni eum dolor! Fugit, cumque enim.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Inicio;