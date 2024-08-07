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
                    
                    <div className=' mt-3 container-redes'>
                        <a href="https://www.linkedin.com/in/javier-uncos-11052325b/">
                            <img src={linkedin} alt="" className='redes' />
                        </a>
                        <a href="https://github.com/javieruncos">
                            <img src={github} alt="" className='redes' />
                        </a>
                        <a href="mailto:javiersrfc@gmail.com">
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
                <article className='seccion-proyectos'>
                    <Proyecto></Proyecto>
                </article>
            </section>
            <section className='container' id='tecnologias'>
                <div className=' py-5'>
                    <div className='contacto '>
                        <div className='container-form my-4'>
                            <div id='sobreMi'>
                                <h3 className='fs-1'>Sobre mi</h3>
                                <p className='fs-4'>
                                he trabajado en proyectos personales y grupales que me han permitido desarrollar
                                 habilidades en la creación de sitios web responsivos, intuitivos y visualmente atractivos.
                                  Estoy entusiasmado por aplicar lo que he aprendido
                                 en un entorno profesional y seguir creciendo como desarrollador frontend.
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