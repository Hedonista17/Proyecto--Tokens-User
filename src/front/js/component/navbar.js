import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 text-light"> React -Sistema de Autenticación</span>
				</Link>
				<div className="hstack gap-3">
					<Link to="/user/register">
						<button className="btn btn-info rounded-0">Registrarse</button>
					</Link>
					<Link to="/user/login">
						<button className="btn btn-light  rounded-0">Iniciar Sesión</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
