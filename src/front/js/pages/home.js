import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navbar } from ".././component/navbar";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<React.Fragment>
			<Navbar />
		<div className="text-center mt-5">
			<h2 className="my-5  border-bottom border-dark">Bienvenido al Pastafarismo</h2>
			<img className="my-5 border border-dark" src="https://www.pastafarismo.es/wp-content/uploads/SistineHirez3-tentative-1024x495.jpg"/> 
		</div>
		</React.Fragment>
		
	);
};
