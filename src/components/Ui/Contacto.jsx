import React from 'react';
import '../../assets/style/Contacto.css';
const Contacto = () => {
    return (
        <div className='contacto container'>
            <div className='container-form mt-4'>
                <div>
                    {/* <div className='col-12 col-md-6 col-lg-6'>
                        <div className="form-container">
                            <form className="form">
                                <div className="form-group">
                                    <label>Nombre y Apellido</label>
                                    <input required="" name="email" id="email" type="text" />
                                </div>
                                <div className="form-group">
                                    <label>Correo Electronico</label>
                                    <input required="" name="email" id="email" type="text" />
                                </div>
                                <div className="form-group">
                                    <label >En que puedo ayudarte?</label>
                                    <textarea required="" cols="50" rows="10" id="textarea" name="textarea" />
                                </div>
                                <button type="submit" className="form-submit-btn">Submit</button>
                            </form>
                        </div>
                    </div> */}
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
    );
};

export default Contacto;