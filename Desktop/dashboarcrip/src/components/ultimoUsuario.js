import { useState, useEffect } from "react";

const urlApi = 'http://localhost:3002/api/users'

function UltimoUsuario () {

    const [usuarios, setUsuario] = useState();
    
    useEffect( () => { 
        fetch(urlApi)
        .then(response => response.json() )
        .then(data =>  setUsuario(data.data[data.total-1].nombre))
        .catch(e =>console.log(e)); }, [] )

    const [apellido, setApellido] = useState();
    
    useEffect( () => { 
        fetch(urlApi)
        .then(response => response.json() )
        .then(data =>  setApellido(data.data[data.total-1].apellido))
        .catch(e =>console.log(e)); }, [] )
    
    const [imagen, setImagen] = useState();
    
    useEffect( () => { 
        fetch(urlApi)
        .then(response => response.json() )
        .then(data =>  setImagen(data.data[data.total-1].nombreImagen))
        .catch(e =>console.log(e)); }, [] )
        
    
    return (

        <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Ultimo usuario en la Base de Datos</h6>
                </div>
                <div class="card-body">
                    <div class="text-center">
                        <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25 rem'}} src={"http://localhost:3002/img/usuarios/" + imagen} alt="image dummy"/>
                    </div>
                    <p>{usuarios + " " + apellido}</p>
                    <a target="_blank" rel="nofollow" href="/"> Ver el perfil del usuario</a>
                </div>
            </div>
        </div>
    )
}

export default UltimoUsuario;
