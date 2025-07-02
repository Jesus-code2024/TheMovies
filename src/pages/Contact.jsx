// src/pages/Contact.jsx
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es requerido.';
    if (!formData.email) {
      newErrors.email = 'El correo es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Formato de correo inválido.';
    }
    if (!formData.message) newErrors.message = 'El mensaje es requerido.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Limpiar el error cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Formulario enviado:', formData);
      toast.success('¡Mensaje enviado con éxito!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
    } else {
      toast.error('Por favor, corrige los errores en el formulario.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <section>
      <h1 className="mb-4 text-center">Contáctanos</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre:</label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-describedby="nameFeedback"
              />
              {errors.name && <div id="nameFeedback" className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico:</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-describedby="emailFeedback"
              />
              {errors.email && <div id="emailFeedback" className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje:</label>
              <textarea
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                aria-describedby="messageFeedback"
              ></textarea>
              {errors.message && <div id="messageFeedback" className="invalid-feedback">{errors.message}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;