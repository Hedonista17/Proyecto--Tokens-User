import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from ".././component/navbar";
import { Context } from "../store/appContext";

export const Registro = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
              <Navbar/>
			<div className="container text-center mt-5">
				<h2>CREAR NUEVA CUENTA</h2>
				<h5>Accede a todos los servicios de Grupo Pastafarismo</h5>
			</div>
			<div className="container mt-5">
				<h4>Datos de Acceso</h4>
				<form>
					<div className="row align-items-start my-3">
						<div className="col">
							<label for="exampleFormControlInput1" className="form-label">Nombre de Usuario</label>
							<input type="text"className="form-control rounded-0" placeholder="Usuario" pattern="[A-Za-z]" maxlength="20" required
                             oninput="this.value = this.value.replace(/[^a-zAZ-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-.]/g, '').replace(/(\..*)\./g, '$1');"/>
						</div>
						<div className="col">
							<label for="inputPassword6" className="form-label">Contraseña</label>
							<input type="password"  className="form-control rounded-0" aria-labelledby="passwordHelpInline" placeholder="Debe tener entre 8-20 caracteres." required />
						</div>
					</div>
					<div className="row align-items-center my-3">
						<div className="col">
							<label for="exampleFormControlInput1" className="form-label">Nombre</label>
							<input type="text" className="form-control rounded-0"  pattern="[A-Za-z]" maxlength="20" required
                             oninput="this.value = this.value.replace(/[^a-zAZ-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-.]/g, '').replace(/(\..*)\./g, '$1');"/>
						</div>
						<div className="col">
							<label for="exampleFormControlInput1" className="form-label">Apellidos</label>
							<input type="text"className="form-control rounded-0"  pattern="[A-Za-z]" maxlength="50" required
                             oninput="this.value = this.value.replace(/[^a-zAZ-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-.]/g, '').replace(/(\..*)\./g, '$1');"/>
						</div>
					</div>
					<div className="row align-items-end my-3">
						<div className="col">
							<label for="exampleFormControlInput1" className="form-label">Fecha de Nacimiento</label>
							<input type="date" className="form-control rounded-0" placeholder="dd/mm/aaaa" required/>
						</div>
						<div className="col">
							<label for="exampleFormControlInput1" className="form-label">Dirección Email</label>
							<input type="email" className="form-control rounded-0" placeholder="nombre@ejemplo.com" required/>
						</div>
					</div>
					<button type="submit" className="btn btn-dark mx-3  rounded-0">Registrarme</button>
				</form>
			</div>

		</React.Fragment >

	);
};
