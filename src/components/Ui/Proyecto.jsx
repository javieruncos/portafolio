import React from 'react';
import '../../assets/style/Proyecto.css';
import ecommerce from "../../assets/img/proyectos/eccomerce.png";
import futbol from "../../assets/img/proyectos/futbol2.png";
import movie from "../../assets/img/proyectos/movie.png";
import { LogosTecnologias } from '../../helpers/tecnologias';
const Proyecto = () => {



    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-12 col-lg-6'>
                    <div className='card-proyectos'>
                        <div className='contenedor-img'>
                            <img src={ecommerce} alt="" />
                        </div>
                        <div className='description-proyecto container pt-3'>
                            <h3 className='fs-1'>Ecommerce</h3>
                            <div>
                                <h4 className='color-Text'>Descripcion</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aliquid labore esse dicta quae inventore placeat pariatur. Accusamus sapiente
                                    nostrum eaque ut. Vero, saepe quasi! Modi mollitia quis deserunt nulla.
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
                    </div>
                </div>
                <div className='col-12 col-md-12 col-lg-6'>
                    <div className='card-proyectos'>
                        <div className='contenedor-img'>
                            <img src={futbol} alt="" />
                        </div>
                        <div className='description-proyecto container pt-3 '>
                            <h3 className='fs-1'>Futbol flash</h3>
                            <div>
                                <h4 className='color-Text'>Descripcion</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aliquid labore esse dicta quae inventore placeat pariatur. Accusamus sapiente
                                    nostrum eaque ut. Vero, saepe quasi! Modi mollitia quis deserunt nulla.
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
                    </div>
                </div>
                <div className='col-12 col-md-12 col-lg-6'>
                    <div className='card-proyectos'>
                        <div className='contenedor-img'>
                            <img src={movie} alt="" />
                        </div>
                        <div className='description-proyecto container pt-3 '>
                            <h3 className='fs-1'>Movie App</h3>
                            <div>
                                <h4 className='color-Text'>Descripcion</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aliquid labore esse dicta quae inventore placeat pariatur. Accusamus sapiente
                                    nostrum eaque ut. Vero, saepe quasi! Modi mollitia quis deserunt nulla.
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
                    </div>
                </div>
                <div className='col-12 col-md-12 col-lg-6'>
                    <div className='card-proyectos'>
                        <div className='contenedor-img'>
                            <img src={movie} alt="" />
                        </div>
                        <div className='description-proyecto container pt-3 '>
                            <h3 className='fs-1'>Movie App</h3>
                            <div>
                                <h4 className='color-Text'>Descripcion</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero aliquid labore esse dicta quae inventore placeat pariatur. Accusamus sapiente
                                    nostrum eaque ut. Vero, saepe quasi! Modi mollitia quis deserunt nulla.
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proyecto;