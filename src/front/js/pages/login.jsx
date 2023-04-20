import React, { useState, useEffect, useContext } from "react";
import { Navbar } from ".././component/navbar";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { loginUser } from "../services";

export const Login = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

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
		await loginUser(registro)

	}

	return (
		<React.Fragment>
			<Navbar />

			<form onChange={handleChange} onSubmit= {handleSubmit} id="container-login" className="container">

				<div id="login" className="border border-2 border-dark">
					<h5 className="text-center">Iniciar Sesión en Pastafarismo</h5>
					<div className="col">
						<label htmlFor="exampleFormControlInput1" className="form-label">Nombre de Usuario</label>
						<input type="text" className="form-control rounded-0"  required />
					</div>
					<div className="col">
						<label htmlFor="exampleFormControlInput1" className="form-label">Dirección Email</label>
						<input type="email" className="form-control rounded-0" placeholder="nombre@ejemplo.com" required />
					</div>
					<div className="col">
						<label htmlFor="inputPassword6" className="form-label">Contraseña</label>
						<input type="password" className="form-control rounded-0" aria-labelledby="passwordHelpInline" placeholder="Debe tener entre 8-20 caracteres." required />
					</div>
					
						<input type="submit" value ="Iniciar Sesión" className="btn btn-dark mx-3 my-1  rounded-0"></input>
					

				</div>
			</form>

		</React.Fragment>

	);



};
