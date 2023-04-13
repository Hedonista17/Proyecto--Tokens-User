import React, { useState, useEffect, useContext } from "react";
import { Navbar } from ".././component/navbar";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Login = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<React.Fragment>
			<Navbar/>
			<div id="container-login" className="container">
				
				<div id= "login" className="border border-2 border-dark">
				<h5 className="text-center">Iniciar Sesión en Pastafarismo</h5>
					<div className="col">
					<label for="exampleFormControlInput1" className="form-label">Dirección Email</label>
				    <input type="email" className="form-control rounded-0" placeholder="nombre@ejemplo.com" required/>
					</div>
					<div className="col">
						<label for="inputPassword6" className="form-label">Contraseña</label>
						<input type="password" className="form-control rounded-0" aria-labelledby="passwordHelpInline" placeholder="Debe tener entre 8-20 caracteres." required />
					</div>
					<Link to="/user/private">
					<button type="submit" className="btn btn-dark mx-3 my-1  rounded-0">Iniciar Sesión</button>
					</Link>
					
				</div>
			</div>

		</React.Fragment>

	);



};
