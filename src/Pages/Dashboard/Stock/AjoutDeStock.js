import React from 'react';

import HeaderDashboard from '../HeaderDashboard';
import SidebarDashboard from '../SidebarDashboard';
import BodyAjoutStock from './BodyAjoutStock';
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
        <BodyAjoutStock />
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