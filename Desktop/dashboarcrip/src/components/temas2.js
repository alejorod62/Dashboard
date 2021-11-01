import { useState, useEffect } from "react";

const urlApi = 'http://localhost:3002/api/topics'

function Temas2() { 
        
    let [tema1, setTema1] = useState();

    useEffect( () => { 
        fetch(urlApi)
        .then(response => response.json() )
        .then(data =>  setTema1 ( data.data[0].titulo))
        .catch(e =>console.log(e)); }, [] )

    let [tema2, setTema2] = useState();

    useEffect( () => { 
        fetch(urlApi)
        .then(response => response.json() )
        .then(data =>  setTema2 ( data.data[1].titulo))
        .catch(e =>console.log(e)); }, [] )

    let [tema3, setTema3] = useState();

    useEffect( () => { 
        fetch(urlApi)
        .then(response => response.json() )
        .then(data =>  setTema3 ( data.data[2].titulo))
        .catch(e =>console.log(e)); }, [] )

    let [tema4, setTema4] = useState();

    useEffect( () => { 
        fetch(urlApi)
        .then(response => response.json() )
        .then(data =>  setTema4 ( data.data[3].titulo))
        .catch(e =>console.log(e)); }, [] )


    let [tema5, setTema5] = useState();

    useEffect( () => { 
        fetch(urlApi)
        .then(response => response.json() )
        .then(data =>  setTema5 ( data.data[4].titulo))
        .catch(e =>console.log(e)); }, [] )


        let [tema6, setTema6] = useState();

        useEffect( () => { 
            fetch(urlApi)
            .then(response => response.json() )
            .then(data =>  setTema6 ( data.data[5].titulo))
            .catch(e =>console.log(e)); }, [] )
        
    return (
        
        <div class="col-lg-6 mb-4">						
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Temas en la Base de Datos</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                    {tema1}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                {tema2}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                {tema3}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                {tema4}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                {tema5}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                {tema6}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Temas2;