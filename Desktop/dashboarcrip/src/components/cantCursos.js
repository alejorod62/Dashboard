import { useState, useEffect, useRef } from "react";

const urlApi = 'http://localhost:3002/api/courses/count'

function CantCursos() {

    let [cursos, setCursos] = useState();
    
useEffect( () => { 
    fetch(urlApi)
    .then(response => response.json() )
    .then(data =>  setCursos( data.total))
    .catch(e =>console.log(e)); }, [] )


    return (
        <div class="col-md-4 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> Cursos en la Base de Datos</div>
                        
                        <div class="h5 mb-0 font-weight-bold text-gray-800">{cursos}</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default CantCursos;