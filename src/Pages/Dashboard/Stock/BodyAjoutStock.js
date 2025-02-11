import React, { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const BodyAjoutStock = () => {
    
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
                                            <form action="">
                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Marque</th>
                                                        <th scope="col">Modèle</th>
                                                        <th scope="col">Prix</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        <tr >
                                                            <td><input type="text" class="form-control" id="" name="marque"/></td>
                                                            <td><input type="text" class="form-control" id="" name="modele"/></td>
                                                            <td><input type="text" class="form-control" id="" name="prix"/></td>
                                                        </tr>
                                                        <tr >
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