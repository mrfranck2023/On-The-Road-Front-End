import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import data from "../../../db/data_clients";
import Modal from '../../../Components/Modal/Modal';  //permet d'afficher la popup lorsqu'on click sur le bouton quick view
import Form from 'react-bootstrap/Form';



const itemsPerPage = 5; // Nombre d'éléments par page

const BodyClients = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Déterminer les éléments à afficher
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

    //parametres de la fenetre modale
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleEyeClick = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    return (
        <>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Gestion de la clientèle</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">Gestion-des-clients</li>
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
                                            <h5 className="card-title">Gérer mes clients</h5>


                                            <table className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Id</th>
                                                        <th scope="col">Nom</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Statut</th>
                                                        <th scope="col">Pays</th>
                                                        <th scope="col">Supprimer</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {currentItems.map((client, index) => (
                                                        <tr key={index}>
                                                            <th scope="row"><a href="#">#{client.id}</a></th>
                                                            <td>{client.nom}</td>
                                                            <td><a href="#" className="text-primary">{client.email}</a></td>
                                                            <td>{client.statut}</td>
                                                            <td>{client.pays}</td>
                                                            <td><button type="button" class="btn btn-danger">Supprimer</button></td>
                                                            <td><div className="">
                                                                <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                                                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                                    <li className="dropdown-header text-start">
                                                                        <h6>Options</h6>
                                                                    </li>
                                                                    <li><a className="dropdown-item" href="#" onClick={() => handleEyeClick(client)}>Réduction</a></li>
                                                                    <li><a className="dropdown-item" href="#">Proposer véhicule(s)</a></li>

                                                                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>{/* permet d'afficher la popup lorsqu'on click sur le bouton quick view */}
                                                                        {selectedUser && (
                                                                            <div>
                                                                                <form action="">
                                                                                    <Form.Select aria-label="Default select example">
                                                                                        <option>Choisissez votre taux de reduction</option>
                                                                                        <option value="10">10</option>
                                                                                        <option value="25">25</option>
                                                                                        <option value="50">50</option>
                                                                                        <option value="75">75</option>
                                                                                    </Form.Select>
                                                                                    <label for="floatingTextarea2">Note</label>
                                                                                    <textarea class="form-control" placeholder="Corps du mail" id="floatingTextarea2" style={{ height: 100, marginBottom: 20 }}></textarea>
                                                                                    <button type="button" class="btn btn-secondary" onClick={handleCloseModal} style={{ marginRight: 20 }}>Annuler</button>
                                                                                    <button type="submit" class="btn btn-success">Envoyer</button>

                                                                                </form>
                                                                            </div>
                                                                        )}
                                                                    </Modal>
                                                                </ul>
                                                            </div></td>
                                                        </tr>
                                                    ))}
                                                    <tr><th scope="row">
                                                        <nav aria-label="Page navigation example">
                                                            <ul className="pagination">
                                                                <li className="page-item">
                                                                    <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Précédent</button>
                                                                </li>
                                                                {[...Array(totalPages)].map((_, index) => (
                                                                    <li className="page-item"><a className="page-link" href="#" key={index} onClick={() => setCurrentPage(index + 1)} style={{ fontWeight: currentPage === index + 1 ? "bold" : "normal" }}>{index + 1}</a></li>
                                                                ))}
                                                                <li className="page-item">
                                                                    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className="page-link">
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

export default BodyClients;
