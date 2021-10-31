import { useState, useEffect, useRef } from "react";

const urlApi = 'http://localhost:3002/api/??'

/* ver como lo adaptamos !! */

function MontoDB() {

    const [monto, setMonto] = useState();

    let traerData = (urlApi) => {
        fetch(urlApi)
        .then(response => response.json() )
        .then(data =>  setMonto( {monto: data.total} ))
        .catch(e =>console.log(e));
      }    

    return (
        <div class="col-md-4 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Amount in products</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">${monto}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default MontoDB;