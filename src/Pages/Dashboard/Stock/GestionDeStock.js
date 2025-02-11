import React from 'react';
import BodyGestionStock from './BodyGestionStock';


import HeaderDashboard from '../HeaderDashboard';
import SidebarDashboard from '../SidebarDashboard';
const GestionDeStock = () => {
    return (
        <div>

        {/* ======= Header ======= */}
        <HeaderDashboard />
        {/* End Header */}
  
        {/* ======= Sidebar ======= */}
        <SidebarDashboard />
        {/* End Sidebar*/}
  
        {/* ======= Body ======= */}
        <BodyGestionStock />
        {/* End Body*/}
  
  
        <footer id="footer" className="footer">
          <div className="copyright">
            © Copyright <strong><span>OnTheRoad</span></strong>. All Rights Reserved
          </div>
        </footer>  
  
      </div>
    );
};

export default GestionDeStock;