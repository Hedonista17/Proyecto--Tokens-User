import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from ".././component/navbar";
import { Context } from "../store/appContext";
import { registerUser } from "../services";


export const Registro = () => {
	const { store, actions } = useContext(Context);

	const [registro, setRegistro] = useState(
		{
			username: "",
			email: "",
			password: "",
		})


	const handleChange = ({target}) =>{                           // el valor que se escriba en el form se sustituye en el campo name de cada apartado del objeto,
		setRegistro({...registro ,[target.name]:target.value}) // se setean los cambios en el usestate de registro                                                    
	}	

    const handleSubmit = async (event) =>{
		event.preventDefault();
		await registerUser(registro)

	}

	return (
		<React.Fragment>
			<Navbar />
			<div className="container text-center mt-5">
				<h2>CREAR NUEVA CUENTA</h2>
				<h5>Accede a todos los servicios de Grupo Pastafarismo</h5>
			</div>
			<div className="container mt-5">
				<h4>Datos de Acceso</h4>
				<form onChange={handleChange} onSubmit={handleSubmit}>
					<div className="row align-items-start my-3">
						<div className="col">
							<label htmlFor="exampleFormControlInput1" className="form-label">Nombre de Usuario</label>
							<input type="text" name="username" className="form-control rounded-0" placeholder="Usuario"  maxLength="20" required />
						</div>
						<div className="col">
							<label  htmlFor="inputPassword6" className="form-label">Contraseña</label>
							<input type="password" name="password" className="form-control rounded-0" aria-labelledby="passwordHelpInline" placeholder="Debe tener entre 8-20 caracteres." required />
						</div>
					</div>

					<div className="row align-items-end my-3">
						<div className="col">
							<label  htmlFor="exampleFormControlInput1" className="form-label">Dirección Email</label>
							<input type="email" name="email" className="form-control rounded-0" placeholder="nombre@ejemplo.com" required />
						</div>
					</div>
					<input type="submit" className="btn btn-dark mx-3  rounded-0" value="Registrarme"></input>
				</form>
			</div>

		</React.Fragment >

	);
};
