import { useState, useEffect } from "react";

const urlApi = 'http://localhost:3002/api/courses'

function UltimoCurso () {

    const [curso, setCurso] = useState();
    
    useEffect( () => { 
        fetch(urlApi)
        .then(response => response.json() )
        .then(data =>  setCurso(data.data[1].nombre))
        .catch(e =>console.log(e)); }, [] )
    
    return (

        <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Ultimo Curso en la Base de Datos</h6>
                </div>
                <div class="card-body">
                    <div class="text-center">
                    </div>
                    <p>{curso}</p>
                    <a target="_blank" rel="nofollow" href="http://localhost:3002/courses/details/1">Ver el detalle del producto</a>
                </div>
            </div>
        </div>
    )
}

export default UltimoCurso;
