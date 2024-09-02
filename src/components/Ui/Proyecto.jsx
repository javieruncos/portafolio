import React from 'react';
import '../../assets/style/Proyecto.css';
import ecommerce from "../../assets/img/proyectos/eccomerce.png";
import futbol from "../../assets/img/proyectos/futbol2.png";
import movie from "../../assets/img/proyectos/movie.png";
import magic from "../../assets/img/proyectos/magic.png";
import gym from "../../assets/img/proyectos/gym.png";
import { LogosTecnologias } from '../../helpers/tecnologias';
const Proyecto = () => {



    return (
        <div className='container'>
            <div className='container' >
                <h3 className=''>Proyectos</h3>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-12 col-lg-6'>
                        <div className='card-proyectos'>
                            <a href="https://chic-sprite-d6faab.netlify.app/">
                                <div className='contenedor-img'>
                                    <img src={ecommerce} alt="" />
                                </div>
                                <div className='description-proyecto container pt-3'>
                                    <h3 className='fs-1'>Ecommerce</h3>
                                    <div>
                                        <h4 className='color-Text'>Descripcion</h4>
                                        <p>Este es un proyecto de ecommerce donde aplique lo aprendido en el curso.
                                            donde creamos un CRUD de productos y un carrito de compras.
                                        </p>
                                    </div>
                                    <span className='text-secondary'>tecnologia usadas</span>
                                    <div className=' container-logos'>
                                        <img src={LogosTecnologias.react} alt="" />
                                        <img src={LogosTecnologias.javascript} alt="" />
                                        <img src={LogosTecnologias.bootstrap} alt="" />
                                        <img src={LogosTecnologias.reactRouter} alt="" />
                                        <img src={LogosTecnologias.nodejs} alt="" />
                                        <img src={LogosTecnologias.express} alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6'>
                        <div className='card-proyectos'>
                            <a href="https://inquisitive-mooncake-315ed7.netlify.app/">
                                <div className='contenedor-img'>
                                    <img src={futbol} alt="" />
                                </div>
                                <div className='description-proyecto container pt-3 '>
                                    <h3 className='fs-1'>Futbol flash</h3>
                                    <div>
                                        <h4 className='color-Text'>Descripcion</h4>
                                        <p>Este es un proyecto de futbol donde mostramos hightlights de las principales ligas del
                                            mundo consumiendo la API Scorebat.
                                        </p>
                                    </div>
                                    <span className='text-secondary'>tecnologia usadas</span>
                                    <div className=' container-logos'>
                                        <img src={LogosTecnologias.react} alt="" />
                                        <img src={LogosTecnologias.javascript} alt="" />
                                        <img src={LogosTecnologias.bootstrap} alt="" />
                                        <img src={LogosTecnologias.reactRouter} alt="" />
                                    </div>
                                </div>

                            </a>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6'>
                        <div className='card-proyectos'>
                            <a href="https://unique-pasca-1ddd90.netlify.app/">
                                <div className='contenedor-img'>
                                    <img src={movie} alt="" />
                                </div>
                                <div className='description-proyecto container pt-3 '>
                                    <h3 className='fs-1'>Movie App</h3>
                                    <div>
                                        <h4 className='color-Text'>Descripcion</h4>
                                        <p>Esta es una Aplicacion que permite buscar películas utilizando la API de Themoviedb. 
                                            con un estilo similar a netflix.donde los usuarios pueden  ver detalles como sinopsis,portadas y mas
                                        </p>
                                    </div>
                                    <span className='text-secondary'>tecnologia usadas</span>
                                    <div className=' container-logos'>
                                        <img src={LogosTecnologias.react} alt="" />
                                        <img src={LogosTecnologias.javascript} alt="" />
                                        <img src={LogosTecnologias.bootstrap} alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-6'>
                        <div className='card-proyectos'>
                            <a href="https://gleeful-klepon-72666a.netlify.app/">
                                <div className='contenedor-img'>
                                    <img src={gym} alt="" />
                                </div>
                                <div className='description-proyecto container pt-3 '>
                                    <h3 className='fs-1'>Extreme Gym</h3>
                                    <div>
                                        <h4 className='color-Text'>Descripcion</h4>
                                        <p>Este es un sitio web de Gimnasio que ofrece entrenamientos de boxeo ,kickboxing .
                                            donde tambien pueda conocer detalles sobre cada entrenamiento y ver horarios de clases. 
                                            con un diseño responsivo.
                                        </p>
                                    </div>
                                    <span className='text-secondary'>tecnologia usadas</span>
                                    <div className=' container-logos'>
                                        <img src={LogosTecnologias.react} alt="" />
                                        <img src={LogosTecnologias.javascript} alt="" />
                                        <img src={LogosTecnologias.bootstrap} alt="" />
                                        <img src={LogosTecnologias.reactRouter} alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proyecto;