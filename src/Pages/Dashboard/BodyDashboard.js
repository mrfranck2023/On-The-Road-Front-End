import React, { useEffect, useState } from "react";
import axios from 'axios';
import data_recent_sale from "../../db/data_recents_sale";
import data_top_selling from "../../db/data_top_selling";

import Pagination from "../../Components/Pagination/Pagination";

const itemsPerPage = 5; // Nombre d'éléments par page

const BodyDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data_recent_sale.length / itemsPerPage);

  // Déterminer les éléments à afficher
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data_recent_sale.slice(startIndex, startIndex + itemsPerPage);
  // const [nombre, setNombre] = useState(null);

  // const [sommeVendue, setSommeVendue] = useState(null);

  // const [nbreClient, setNbreClient] = useState(null);

  // useEffect(() => {
  //   const fetchNombreDaySale = async () => {
  //     const response = await axios.get('http://localhost:8080/api/v1/recnumbvehicule');
  //     setNombre(response.data);
  //   };

  //   const fetchSommeVendueJour = async () => {
  //     const response = await axios.get('http://localhost:8080/api/v1/recrecettejour');
  //     setSommeVendue(response.data);
  //   };

  //   const fetchNbreClient = async () => {
  //     const response = await axios.get('http://localhost:8080/api/v1/nbreclient');
  //     setNbreClient(response.data);
  //   };

  //   fetchNombreDaySale();
  //   fetchSommeVendueJour();
  //   fetchNbreClient();
  //   // const interval = setInterval(() => {

  //   // }, 1000); // Exécute la fonction toutes les 1000 millisecondes (1 seconde)

  //   // Fonction de nettoyage pour arrêter l'intervalle lorsque le composant est démonté
  //   // return () => clearInterval(interval);

  // }, []);

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>{/* End Page Title */}
        <section className="section dashboard">
          <div className="row">
            {/* Left side columns */}
            <div className="col-lg-8">
              <div className="row">
                {/* Sales Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li><a className="dropdown-item" href="#">Aujourd'hui</a></li>
                        <li><a className="dropdown-item" href="#">Ce Mois</a></li>
                        <li><a className="dropdown-item" href="#">Cette Année</a></li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Véhicule Vendus <span>   </span><span> / Aujourd'hui</span></h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart" />
                        </div>
                        <div className="ps-3">
                          {/* {nombre !== null ? <h6>{nombre}</h6> : <h6>0</h6>} */}
                          <h6>0</h6>
                          <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">augmentation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{/* End Sales Card */}
                {/* Revenue Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card revenue-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li><a className="dropdown-item" href="#">Aujourd'hui</a></li>
                        <li><a className="dropdown-item" href="#">Ce Mois</a></li>
                        <li><a className="dropdown-item" href="#">Cette Année</a></li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Revenue <span> / Ce Mois</span></h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-currency-dollar" />
                        </div>
                        <div className="ps-3">
                          {/* {sommeVendue !== null ? <h6>{sommeVendue}</h6> : <h6>0</h6>} */}
                          <h6>0</h6>
                          <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">augmentation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{/* End Revenue Card */}
                {/* Customers Card */}
                <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card customers-card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li><a className="dropdown-item" href="#">Aujourd'hui</a></li>
                        <li><a className="dropdown-item" href="#">Ce Mois</a></li>
                        <li><a className="dropdown-item" href="#">Cette Année</a></li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Clients <span> / Cette Année</span></h5>
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-people" />
                        </div>
                        <div className="ps-3">
                          {/* {nbreClient !== null ? <h6>{nbreClient}</h6> : <h6>0</h6>} */}
                          <h6>0</h6>
                          <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">baisse</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{/* End Customers Card */}
                {/* Reports */}
                <div className="col-12">
                  <div className="card">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li><a className="dropdown-item" href="#">Aujourd'hui</a></li>
                        <li><a className="dropdown-item" href="#">Ce Mois</a></li>
                        <li><a className="dropdown-item" href="#">Cette Année</a></li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Reports <span>/Aujourd'hui</span></h5>
                      {/* Line Chart */}
                      <div id="reportsChart" />

                      {/* End Line Chart */}
                    </div>
                  </div>
                </div>{/* End Reports */}
                {/* Recent Sales */}
                <div className="col-12">
                  <div className="card recent-sales overflow-auto">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li><a className="dropdown-item" href="#">Aujourd'hui</a></li>
                        <li><a className="dropdown-item" href="#">Ce Mois</a></li>
                        <li><a className="dropdown-item" href="#">Cette Année</a></li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Recent Sales <span> / Aujourd'hui</span></h5>

                      <table className="table table-borderless datatable">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>

                        <tbody>

                          {currentItems.map((vehicule, index) => (
                            <tr>
                              <th scope="row"><a href="#">#{vehicule.id}</a></th>
                              <td>{vehicule.client}</td>
                              <td><a href="#" className="text-primary">{vehicule.marque} {vehicule.modele}</a></td>
                              <td>{vehicule.price}</td>
                              <td><span className="badge bg-success">Approved</span></td>
                            </tr>
                          ))}
                          <tr><th scope="row">
                            <div aria-label="Page navigation example">
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
                            </div>
                          </th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>{/* End Recent Sales */}
                {/* Top Selling */}
                <div className="col-12">
                  <div className="card top-selling overflow-auto">
                    <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
                        <li><a className="dropdown-item" href="#">Aujourd'hui</a></li>
                        <li><a className="dropdown-item" href="#">Ce Mois</a></li>
                        <li><a className="dropdown-item" href="#">Cette Année</a></li>
                      </ul>
                    </div>
                    <div className="card-body pb-0">
                      <h5 className="card-title">Top Selling <span> / Aujourd'hui</span></h5>
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Preview</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Revenue</th>
                          </tr>
                        </thead>
                        <tbody>
                          <Pagination data={data_top_selling} />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>{/* End Top Selling */}
              </div>
            </div>{/* End Left side columns */}
            {/* Right side columns */}
            <div className="col-lg-4">
              {/* Recent Activity */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li><a className="dropdown-item" href="#">Aujourd'hui</a></li>
                    <li><a className="dropdown-item" href="#">Ce Mois</a></li>
                    <li><a className="dropdown-item" href="#">Cette Année</a></li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Recent Activity <span> / Aujourd'hui</span></h5>
                  <div className="activity">
                    <div className="activity-item d-flex">
                      <div className="activite-label">32 min</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                      <div className="activity-content">
                        Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
                      </div>
                    </div>{/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">56 min</div>
                      <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
                      <div className="activity-content">
                        Voluptatem blanditiis blanditiis eveniet
                      </div>
                    </div>{/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">2 hrs</div>
                      <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                      <div className="activity-content">
                        Voluptates corrupti molestias voluptatem
                      </div>
                    </div>{/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">1 day</div>
                      <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                      <div className="activity-content">
                        Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
                      </div>
                    </div>{/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">2 days</div>
                      <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                      <div className="activity-content">
                        Est sit eum reiciendis exercitationem
                      </div>
                    </div>{/* End activity item*/}
                    <div className="activity-item d-flex">
                      <div className="activite-label">4 weeks</div>
                      <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                      <div className="activity-content">
                        Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                      </div>
                    </div>{/* End activity item*/}
                  </div>
                </div>
              </div>{/* End Recent Activity */}
              {/* Budget Report */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li><a className="dropdown-item" href="#">Aujourd'hui</a></li>
                    <li><a className="dropdown-item" href="#">Ce Mois</a></li>
                    <li><a className="dropdown-item" href="#">Cette Année</a></li>
                  </ul>
                </div>
                <div className="card-body pb-0">
                  <h5 className="card-title">Budget Report <span> / Ce Mois</span></h5>
                  <div id="budgetChart" style={{ minHeight: 400 }} className="echart" />
                </div>
              </div>{/* End Budget Report */}
              {/* Website Traffic */}
              <div className="card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li><a className="dropdown-item" href="#">Aujourd'hui</a></li>
                    <li><a className="dropdown-item" href="#">Ce Mois</a></li>
                    <li><a className="dropdown-item" href="#">Cette Année</a></li>
                  </ul>
                </div>
                <div className="card-body pb-0">
                  <h5 className="card-title">Website Traffic <span> / Aujourd'hui</span></h5>
                  <div id="trafficChart" style={{ minHeight: 400 }} className="echart" />

                </div>
              </div>{/* End Website Traffic */}
              {/* News & Updates Traffic */}
              {/* <div className="card">
            <div className="filter">
              <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots" /></a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li><a className="dropdown-item" href="#">Aujourd'hui</a></li>
                <li><a className="dropdown-item" href="#">Ce Mois</a></li>
                <li><a className="dropdown-item" href="#">Cette Année</a></li>
              </ul>
            </div>
            <div className="card-body pb-0">
              <h5 className="card-title">News &amp; Updates <span> / Aujourd'hui</span></h5>
              <div className="news">
                <div className="post-item clearfix">
                  <img src="./assets/img/news-1.jpg" alt />
                  <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                  <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                </div>
                <div className="post-item clearfix">
                  <img src="./assets/img/news-2.jpg" alt />
                  <h4><a href="#">Quidem autem et impedit</a></h4>
                  <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                </div>
                <div className="post-item clearfix">
                  <img src="./assets/img/news-3.jpg" alt />
                  <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                  <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                </div>
                <div className="post-item clearfix">
                  <img src="./assets/img/news-4.jpg" alt />
                  <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                  <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                </div>
                <div className="post-item clearfix">
                  <img src="./assets/img/news-5.jpg" alt />
                  <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                  <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                </div>
              </div>
            </div>
          </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BodyDashboard;