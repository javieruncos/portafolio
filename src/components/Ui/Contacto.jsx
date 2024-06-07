import React from 'react';
import '../../assets/style/Contacto.css';
const Contacto = () => {
    return (
        <div className='contacto container'>
            <h3>Contacto</h3>
            <div className='container-form mt-4'>
                <div class="form-container">
                    <form class="form">
                        <div class="form-group">
                            <label for="email">Nombre y Apellido</label>
                            <input required="" name="email" id="email" type="text"/>
                        </div>
                        <div class="form-group">
                            <label for="email">Correo Electronico</label>
                            <input required="" name="email" id="email" type="text"/>
                        </div>
                        <div class="form-group">
                            <label for="textarea">En que puedo ayudarte?</label>
                            <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
                        </div>
                        <button type="submit" class="form-submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacto;