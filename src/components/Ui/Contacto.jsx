import React from 'react';
import '../../assets/style/Contacto.css';
const Contacto = () => {
    return (
        <div className='contacto container'>
            <h3>Contacto</h3>
            <div className='container-form mt-4'>
                <div className="form-container">
                    <form className="form">
                        <div className="form-group">
                            <label>Nombre y Apellido</label>
                            <input required="" name="email" id="email" type="text"/>
                        </div>
                        <div className="form-group">
                            <label>Correo Electronico</label>
                            <input required="" name="email" id="email" type="text"/>
                        </div>
                        <div className="form-group">
                            <label >En que puedo ayudarte?</label>
                            <textarea required="" cols="50" rows="10" id="textarea" name="textarea"/>
                        </div>
                        <button type="submit" className="form-submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacto;