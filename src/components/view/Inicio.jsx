import React from 'react';
import '../../assets/style/Inicio.css';

const Inicio = () => {
    return (
        <div>
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
                <div className='mb-4'>
                    <h2 className='display-5'>tecnologias</h2>
                </div>
                <div className='container '>
                    <div className='row'>
                        <div className='col-12 col-md-3 col-lg-3'>
                            <div className='card-stack'>

                            </div>

                        </div>
                        <div className='col-12 col-md-3 col-lg-3'>
                            <div className='card-stack'>

                            </div>

                        </div>
                        <div className='col-12 col-md-3 col-lg-3'>
                            <div className='card-stack'>

                            </div>

                        </div>
                        <div className='col-12 col-md-3 col-lg-3'>
                            <div className='card-stack'>

                            </div>

                        </div>
                        <div className='col-12 col-md-3 col-lg-3'>
                            <div className='card-stack'>

                            </div>

                        </div>
                        <div className='col-12 col-md-3 col-lg-3'>
                            <div className='card-stack'>

                            </div>

                        </div>
                        <div className='col-12 col-md-3 col-lg-3'>
                            <div className='card-stack'>

                            </div>

                        </div>
                        <div className='col-12 col-md-3 col-lg-3'>
                            <div className='card-stack'>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='display-5 text-center'>Proyectos</h3>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className='card-proyectos'>

                            </div>

                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className='card-proyectos'>

                            </div>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className='card-proyectos'>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Inicio;