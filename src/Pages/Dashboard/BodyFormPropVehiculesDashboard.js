import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';

const BodyFormPropVehiculesDashboard = () => {

  const [clientParticulier, setclientParticulier] = useState(null);
  const [societeClient, setSocieteclient] = useState(null);

  const [categorieClient, setcategorieClient] = useState('');
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClientParticulier = async () => {
      const response = await axios.get('http://localhost:8080/api/v1/recparticuliers');
      setclientParticulier(response.data);
    };


    const fetchSocieteClient = async () => {
      const response = await axios.get('http://localhost:8080/api/v1/recsocietes');
      setSocieteclient(response.data);
      console.log(response.data);
    };

    fetchClientParticulier();
    fetchSocieteClient();

  }, []);

  const ClientData = [
    { value: 'particulier', clients: clientParticulier },
    { value: 'Sfiliale', clients: societeClient },
  ];

  useEffect(() => {
    const ClientsDeLaCategorie = ClientData.find(p => p.value === categorieClient)?.clients || [];
    setClients(ClientsDeLaCategorie);

    if(ClientsDeLaCategorie.length > 0){
     
    }
  }, [categorieClient]);
   
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_gm8o81q', 'template_my3g4gq', form.current, {
          publicKey: '9EAUr61leKV1y08Nc',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    

    const handleCategorieClient = (event) => {
      setcategorieClient(event.target.value);
    };

    return (
        <>
<main id="main" className="main">
  <div className="pagetitle">
    <h1>Proposer Véhicules</h1>
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item">Dashboard</li>
        <li className="breadcrumb-item active">Proposer Véhicules</li>
      </ol>
    </nav>
  </div>{/* End Page Title */}
  <section className="section">
    <div className="row">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"></h5>
            {/* General Form Elements */}
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" value={"mr_franck"}  name='from_name' hidden/>
              <input type="email" name="" value={"leuguemfranck28@gmail.com"} hidden/>
              <input type="text" value={"carl"} name='to_name' hidden/>
              {/* <div className="row mb-3">
                <label htmlFor="inputText" className="col-sm-2 col-form-label">Text</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Number</label>
                <div className="col-sm-10">
                  <input type="number" className="form-control" />
                </div>
              </div> */}
              {/* <div className="row mb-3">
                <label htmlFor="inputNumber" className="col-sm-2 col-form-label">File Upload</label>
                <div className="col-sm-10">
                  <input className="form-control" type="file" id="formFile" />
                </div>
              </div> */}
              {/* <div className="row mb-3"> */}
                {/* <label htmlFor="inputDate" className="col-sm-2 col-form-label">Date</label> */}
                {/* <div className="col-sm-10"> */}
                  {/* <input type="date" className="form-control" /> */}
                {/* </div> */}
              {/* </div> */}
              {/* <div className="row mb-3"> */}
                {/* <label htmlFor="inputTime" className="col-sm-2 col-form-label">Time</label> */}
                {/* <div className="col-sm-10"> */}
                  {/* <input type="time" className="form-control" /> */}
                {/* </div> */}
              {/* </div> */}
              <div className="row mb-3">
                <label htmlFor="inputColor" className="col-sm-2 col-form-label">Color Picker</label>
                <div className="col-sm-10">
                  <input type="color" className="form-control form-control-color" id="exampleColorInput" defaultValue="#4154f1" title="Choisir la couleur" />
                </div>
              </div>
              
              {/* <div className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Checkboxes</legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      Example checkbox
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck2" defaultChecked />
                    <label className="form-check-label" htmlFor="gridCheck2">
                      Example checkbox 2
                    </label>
                  </div>
                </div>
              </div> */}
              {/* <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Disabled</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" defaultValue="Read only / Disabled" disabled />
                </div>
              </div> */}
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Catégorie Client</label>
                <div className="col-sm-10">
                  {/* <select className="form-select" onChange={handleCategorieClient} aria-label="Default select example"> */}
                    {/* <option value="Choix de la catégorie du client">Choix de la catégorie du client</option> */}
                    {/* <option value="particulier">Particulier</option>
                    <option value="Sfiliale">Sociètés à filiales</option> */}
                    {/* <option value={3}>Sociétés sans filiales</option> */}
                  {/* </select> */}
                  <select className="form-select" value={categorieClient} onChange={handleCategorieClient} aria-label="Default select example">
                  <option value="Choix de la Catégorie de Véhicules">Choix de la Catégorie du Client </option>
                    {ClientData.map(p => (
                    <option key={p.value} value={p.value}>
                      {p.value}
                    </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Client(s)</label>
                <div className="col-sm-10">
                <select  className="form-select" aria-label="Default select example" disabled={!clients.length}>
                    {clients.map(client => (
                      <option key={client.nom} value={client.nom}>
                        {client.nom}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Véhicules</label>
                <div className="col-sm-10">
                  <select className="form-select" aria-label="Default select example">
                    <option value="Choix de la Catégorie de Véhicules">Choix de la Catégorie de Véhicules</option>
                    <option value={1}>Crossover</option>
                    <option value={2}>Cruiser</option>
                    <option value={3}>Sportives</option>
                  </select>
                </div>
              </div>
              <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">Type</legend>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Voiture
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Moto
                    </label>
                  </div>
                </div>
              </fieldset>

              <div className="row mb-3">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Corps du mail</label>
                <div className="col-sm-10">
                  <textarea className="form-control" style={{height: 100}} defaultValue={""} name='message'/>
                </div>
              </div>
              {/* <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Multi Select</label>
                <div className="col-sm-10">
                  <select className="form-select" multiple aria-label="multiple select example">
                    <option value="Open this select menu">Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div> */}
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Submit Button</label>
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary">Submit Form</button>
                </div>
              </div>
            </form>{/* End General Form Elements */}
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
        
        </>
    );
};

export default BodyFormPropVehiculesDashboard;