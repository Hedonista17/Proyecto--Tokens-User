import React, { useState, useEffect, useContext } from "react";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Private = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <React.Fragment>
            <div className="container">
                <h1> hola esto es una prueba de un area privada klk -no esta terminado</h1>
                <img src="https://rlv.zcache.co.uk/doge_meme_doge_shibe_doge_dog_cute_doge_photo_print-r3ff83c0e2b574c27852a47f7e4f88b48_w2c_8byvr_736.jpg" />
                <Link to="/user/login">
                    <button type="submit" className="btn btn-danger mx-3 my-1  rounded-0">Cerrar Sesión</button>
                </Link>
            </div>
 
        </React.Fragment>

    );

/* falta poner los id para el area privada- cada usuario tiene una id por tanto un area privada diferente */

};
