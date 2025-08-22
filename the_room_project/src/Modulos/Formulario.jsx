import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
    // Estados para manejar el formulario y errores
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        celular: '',
        comentarios: '',
        terminos: false,
    });

    const [errores, setErrores] = useState({
        nombre: '',
        apellido: '',
        email: '',
        celular: '',
        terminos: '',
    });

    // Manejo de cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Validación del formulario
    const validarFormulario = () => {
        const nuevosErrores = {};
        let esValido = true;

        // Validaciones de campos
        if (formData.nombre.length < 2) {
            nuevosErrores.nombre = 'El nombre debe tener al menos 2 caracteres';
            esValido = false;
        }
        if (formData.apellido.length < 2) {
            nuevosErrores.apellido = 'El apellido debe tener al menos 2 caracteres';
            esValido = false;
        }
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regexEmail.test(formData.email)) {
            nuevosErrores.email = 'Correo electrónico no válido';
            esValido = false;
        }
        if (!formData.terminos) {
            nuevosErrores.terminos = 'Debes aceptar los términos y condiciones';
            esValido = false;
        }

        setErrores(nuevosErrores);
        return esValido;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            alert('Formulario enviado correctamente');
            setFormData({
                nombre: '',
                apellido: '',
                email: '',
                celular: '',
                comentarios: '',
                terminos: false,
            });
            setErrores({
                nombre: '',
                apellido: '',
                email: '',
                celular: '',
                terminos: '',
            });

        } else {
            alert('Por favor revisa los errores en el formulario');
        }
    };

    return (
        <div className="contenedor">
            <div className="izquierda">
                <h1>Bienvenido a nuestra pagina de soporte</h1>
                <p>Estamos aqui para ayudarte con cualquier problema que tengas con nuestro servicio.</p>
                <img src="./SoporteIMG.png" alt="Imagen de contacto" />
            </div>

            <div className="derecha">
                <form onSubmit={handleSubmit}>
                    <div className="campo">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder='Ingresa tu nombre'
                            required
                        />
                        {errores.nombre && <span className="error">{errores.nombre}</span>}
                    </div>

                    <div className="campo">
                        <label htmlFor="apellido">Apellidos</label>
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            placeholder='Ingresa tus apellidos'
                            required
                        />
                        {errores.apellido && <span className="error">{errores.apellido}</span>}
                    </div>

                    <div className="campo">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Ingresa tu email'
                            required
                        />
                        {errores.email && <span className="error">{errores.email}</span>}
                    </div>

                    <div className="campo">
                        <label htmlFor="celular">Número de Celular</label>
                        <input
                            type="text"
                            id="celular"
                            name="celular"
                            value={formData.celular}
                            onChange={handleChange}
                            placeholder='(Cod. Pais) + Num'
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="comentarios">Comentarios</label>
                        <textarea
                            id="comentarios"
                            name="comentarios"
                            value={formData.comentarios}
                            onChange={handleChange}
                            placeholder='Ingresa tus comentarios'
                        ></textarea>
                    </div>

                    <div className="campo">
                        <label>
                            <input
                                type="checkbox"
                                name="terminos"
                                checked={formData.terminos}
                                onChange={handleChange}
                            />
                            Estoy de acuerdo con los <a href="/terminos">términos y condiciones</a>
                        </label>
                        {errores.terminos && <span className="error">{errores.terminos}</span>}
                    </div>

                    <button type="submit" className="btn-enviar">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
