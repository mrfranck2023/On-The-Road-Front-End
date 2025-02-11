import React from 'react';
import "./Payment.css";

const PaymentPage = () => {
    return (
        <>
        <div className=' fullscreen-div'>
        <div className="container parent-bloc">
                <div className="container d-flex justify-content-center align-items-center full-height"><h1 className="text-center">Paiement</h1></div>

                <div className="container my-5 justify-content-center bloc" id='bloc1'>
                    <div className="text-center mb-4">
                        <h2>Selectionnez une méthode de paiement</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-4 boite">
                            <div className="custom-box text-center im1"></div>
                            <div>Orange Money</div>
                        </div>
                        <div className="col-md-4 boite">
                            <div className="custom-box text-center im2"></div>
                            <div>Mobile Money</div>
                        </div>
                        <div className="col-md-4">
                            <div className="custom-box text-center im3"></div>
                        </div>
                    </div>
                </div>

                <div className="container my-5 justify-content-center bloc">
                    <form action="">
                        <div className="text-center mb-4">
                            <h2>Informations personnelles</h2>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">ADDRESSE EMAIL</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">NOM UTILISATEUR</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div>

                        <div className="text-center mb-4">
                            <h2>Informations du compte orange money</h2>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">NUMERO DE TELEPHONE</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">CODE SECRET</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div>
                        <div className="text-center mb-4">
                            <h2>Taxes</h2>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Taxes</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="" />
                        </div>
                        <input className="btn btn-success rounded-0" type="submit" value="PAYER"></input>
                    </form>

                </div>

            </div>

        </div>
            
        </>
    );
};

export default PaymentPage;