import React, { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';


const BodyAjoutStock = () => {
    const [make, setMake] = useState()
    const [model, setModel] = useState()
    const [price, setPrice] = useState()
    const [type, setType] = useState("CAR")
    const [hasStorage, setHasStorage] = useState("true")
    const [numDoors, setNumDoors] = useState(4)
    const [fuelType, setFuelType] = useState("Gasoline")
    const navigate = useNavigate()

    function addVehicule(event)
    {
        event.preventDefault()
        axios.post("http://localhost:8080/api/vehicles", {type, make, model, price, fuelType, numDoors, hasStorage})
        .then(res=>{
            navigate("/gestion-stock")
            console.log("on y est");
        })
        .catch(err=>console.log(err))
    }

    return (
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Gestion de stock</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Mise-à-jour-du-stock</li>
                        </ol>
                    </nav>
                </div>{/* End Page Title */}
                <section className="section dashboard">
                    <div className="row">
                        {/* Left side columns */}
                        <div className="">
                            <div className="row">
                                {/* Recent Sales */}
                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                        <div className="card-body">
                                            <h5 className="card-title">Ajouter un véhicule</h5>
                                            <div className="card-title">
                                                <NavLink to="/gestion-stock">
                                                    <button type="button" class="btn btn-success btn-lg"><i class="bi bi-box-arrow-left"></i></button>
                                                </NavLink >
                                            </div>
                                            <br />
                                            <form action=""  onSubmit={addVehicule}>
                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Type</th>
                                                        <th scope="col">Marque</th>
                                                        <th scope="col">Modèle</th>
                                                        <th scope="col">Prix</th>
                                                        <th scope="col">FuelType</th>
                                                        <th scope="col">Nombre de porte</th>
                                                        <th scope="col">Est stocké</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        <tr >
                                                            <td><input type="text" class="form-control" placeholder="CAR OU SCOOTER" id="" name="type" onChange={e=>setType(e.target.value)}/></td>
                                                            <td><input type="text" class="form-control" id="" name="marque" onChange={e=>setMake(e.target.value)}/></td>
                                                            <td><input type="text" class="form-control" id="" name="modele" onChange={e=>setModel(e.target.value)}/></td>
                                                            <td><input type="number" class="form-control" id="" name="prix" onChange={e=>setPrice(e.target.value)}/></td>
                                                            <td><input type="text" class="form-control" id="" name="fueltype" onChange={e=>setFuelType(e.target.value)}/></td>
                                                            <td><input type="number" class="form-control" id="" name="numdoors" onChange={e=>setNumDoors(e.target.value)}/></td>
                                                            <td><input type="text" class="form-control" placeholder="true ou false" id="" name="isstorage" onChange={e=>setHasStorage(e.target.value)}/></td>
                                                        </tr>
                                                        <tr >
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td><div class="d-grid gap-2"><button type="submit" class="btn btn-primary">Ajouter</button></div></td>
                                                        </tr>
                                                </tbody>
                                            </table>
                                            </form>
                                        </div>
                                    </div>
                                </div>{/* End Recent Sales */}
                            </div>
                        </div>{/* End Left side columns */}

                    </div>
                </section>
            </main>
        </>
    );
};

export default BodyAjoutStock;