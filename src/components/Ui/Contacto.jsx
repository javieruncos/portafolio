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
                            <label for="email">Company Email</label>
                            <input required="" name="email" id="email" type="text"/>
                        </div>
                        <div class="form-group">
                            <label for="email">Company Email</label>
                            <input required="" name="email" id="email" type="text"/>
                        </div>
                        <div class="form-group">
                            <label for="textarea">How Can We Help You?</label>
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