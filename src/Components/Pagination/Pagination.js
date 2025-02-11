import React, { useEffect, useState } from 'react';
const itemsPerPage = 5; // Nombre d'éléments par page

const Pagination = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Déterminer les éléments à afficher
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);  

    return (
        <>
        {currentItems.map((vehicule, index) => (
            <tr>
                <th scope="row"><img src={vehicule.img} alt="" /></th>
                <td>{vehicule.marque} {vehicule.modele}</td>
                <td>{vehicule.price}</td>
                <td>{vehicule.nbvendu}</td>
                <td>{vehicule.total}</td>
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
        </>
    );
};

export default Pagination;