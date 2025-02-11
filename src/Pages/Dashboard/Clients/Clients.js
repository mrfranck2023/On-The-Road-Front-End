import React from 'react';
import HeaderDashboard from '../HeaderDashboard';
import SidebarDashboard from '../SidebarDashboard';
import BodyClients from './BodyClients';

const Clients = () => {
    return (
        <>
            {/* ======= Header ======= */}
            <HeaderDashboard />
            {/* End Header */}

            {/* ======= Sidebar ======= */}
            <SidebarDashboard />
            {/* End Sidebar*/}

            {/* ======= Body ======= */} 
            <BodyClients />
            {/* End Body*/}     

        <footer id="footer" className="footer">
        <div className="copyright">
          © Copyright <strong><span>OnTheRoad</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="">MadeByMe</a>
        </div>
      </footer>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
    
        </>
    );
};

export default Clients;