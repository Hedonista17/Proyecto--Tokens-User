import React, { useState, useEffect, useContext } from "react";
import { getUserPrivate } from "../services";
import { Link } from "react-router-dom";



export const Private = props => {

    const [acceso, setAcceso] = useState({
        email: "",
        id: "",
        username: ""
    })

    const getInfo = async () => {
        const info = await getUserPrivate();
        setAcceso(info);

    }

    useEffect(() => {
        const fetchData = async () => {getInfo()} ;
        fetchData();} ,[]);

    return (
        <React.Fragment>
            <div className="container">
                <h1> hola {acceso.username} esto es una prueba de un area privada klk -bro</h1>
                <img src="https://rlv.zcache.co.uk/doge_meme_doge_shibe_doge_dog_cute_doge_photo_print-r3ff83c0e2b574c27852a47f7e4f88b48_w2c_8byvr_736.jpg" />
                <Link to="/user/login">
                    <button type="submit" className="btn btn-danger mx-3 my-1  rounded-0">Cerrar Sesión</button>
                </Link>
            </div>

        </React.Fragment>

    );

    /* falta poner los id para el area privada- cada usuario tiene una id por tanto un area privada diferente */

};
