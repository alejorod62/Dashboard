import { useState, useEffect, useRef } from "react";

const urlApi = 'http://localhost:3002/api/courses'

function UltimoCurso () {

{/*   const [curso, setCurso] = useState();

 let traerData = (urlApi) => {
        fetch(urlApi)
        .then(response => response.json() )
        .then(data =>  setCurso( {curso: data.total[data.total.lenght-1]} ))
        .catch(e =>console.log(e));
    }    
*/}
    const [curso, setCurso] = useState();
    
    useEffect( () => { 
        fetch(urlApi)
        .then(response => response.json() )
        .then(data =>  setCurso( data.total[data.total.lenght-1]))
        .catch(e =>console.log(e)); }, [] )
    
    
    
    
console.log(curso)

    return (

        <div class="col-lg-6 mb-4">
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Ultimo Curso en la Base de Datos</h6>
                </div>
                <div class="card-body">
                    <div class="text-center">
                        <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src={"http://localhost/3002/img" + curso.nombreImagen} alt="image dummy"/>
                    </div>
                    <p>{curso.nombre}</p>
                    <a target="_blank" rel="nofollow" href="/">Ver el detalle del producto</a>
                </div>
            </div>
        </div>
    )
}

export default UltimoCurso;
