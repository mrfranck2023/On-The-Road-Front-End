import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import data from "../../../db/data_dashboard";

const itemsPerPage = 5; // Nombre d'éléments par page

const BodyGestionStock = () => {
    
    const [dataVehicules, setDataVehicules] = useState([]);
    
    useEffect(() => {
        const fetchListeVehicules = async () => {
            const response = await axios.get('http://localhost:8080/api/vehicles');
            setDataVehicules(response.data.vehicles);
            console.log("jdjeodjeodjeodjeodjeoje");
            console.log(response.data.vehicles);
            console.log("diejdiejdiejdiejdiejiej");
        };
        
        fetchListeVehicules();

        const interval = setInterval(() => {
            
        }, 1000); // Exécute la fonction toutes les 1000 millisecondes (1 seconde)
        
        //Fonction de nettoyage pour arrêter l'intervalle lorsque le composant est démonté
        return () => clearInterval(interval);
        
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(dataVehicules.length / itemsPerPage);

    // Déterminer les éléments à afficher
    const startIndex = (currentPage - 1) * itemsPerPage;

    const currentItems = dataVehicules.slice(startIndex, startIndex + itemsPerPage);  

    return (
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Gestion de stock</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Gestion-de-stock</li>
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
                                            <h5 className="card-title">Gérer mes véhicules</h5>
                                            <div className="card-title">
                                                <NavLink to="/ajout-stock">
                                                    <button type="button" class="btn btn-primary btn-lg">Ajouter un véhicule</button>
                                                </NavLink >
                                            </div>
                                            <br />
                                            
                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Type</th>
                                                        <th scope="col">Marque</th>
                                                        <th scope="col">Modèle</th>
                                                        <th scope="col">Prix</th>
                                                        <th scope="col">Modifier</th>
                                                        <th scope="col">Supprimer</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {currentItems.map((vehicule, index) => (
                                                    <tr vehicule={index}>
                                                        <th scope="row"><a href="#">#{vehicule.id}</a></th>
                                                        <td>{vehicule.type}</td>
                                                        <td>{vehicule.make}</td>
                                                        <td><a href="#" className="text-primary">{vehicule.model}</a></td>
                                                        <td>{vehicule.price}</td>
                                                        <td><button type="button" class="btn btn-warning">Modifier</button></td>
                                                        <td><button type="button" class="btn btn-danger">Supprimer</button></td>
                                                    </tr>
                                                    ))}
                                                    <tr><th scope="row">
                                                            <nav aria-label="Page navigation example">
                                                                <ul class="pagination">
                                                                    <li class="page-item">
                                                                      <button class="page-link" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Précédent</button>
                                                                    </li>
                                                                    {[...Array(totalPages)].map((_, index) => (
                                                                    <li class="page-item"><a class="page-link" href="#" key={index} onClick={() => setCurrentPage(index + 1)} style={{ fontWeight: currentPage === index + 1 ? "bold" : "normal" }}>{index + 1}</a></li>
                                                                    ))}
                                                                    <li class="page-item">
                                                                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} class="page-link">
                                                                      Suivant
                                                                    </button>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </th>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default BodyGestionStock;