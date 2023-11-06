import React from 'react';

function RegistroUsuarios() {
  return (
    <div className="form-container">
      <h2>Registro de usuarios</h2>
      <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="last-name">Apellido:</label>
        <input type="text" id="last-name" name="last-name" required />
        <label htmlFor="id-number">Cédula:</label>
        <input type="text" id="id-number" name="id-number" required />
        <label htmlFor="birthdate">Fecha de nacimiento:</label>
        <input type="date" id="birthdate" name="birthdate" required />
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistroUsuarios;
