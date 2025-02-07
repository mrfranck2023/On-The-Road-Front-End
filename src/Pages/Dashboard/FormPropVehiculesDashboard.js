import React from 'react';
import BodyFormPropVehiculesDashboard from './BodyFormPropVehiculesDashboard';


import HeaderDashboard from './HeaderDashboard';
import SidebarDashboard from './SidebarDashboard';

const FormPropVehiculesDashboard = () => {
    return (
        <div className="body">

        {/* ======= Header ======= */}
        <HeaderDashboard />
        {/* End Header */}
  
        {/* ======= Sidebar ======= */}
        <SidebarDashboard />
        {/* End Sidebar*/}
  
        {/* ======= Body ======= */}
        <BodyFormPropVehiculesDashboard />
        {/* End Body*/}
  
  
        <footer id="footer" className="footer">
          <div className="copyright">
            © Copyright <strong><span>OnTheRoad</span></strong>. All Rights Reserved
          </div>
        </footer>  
  
      </div>
    );
};

export default FormPropVehiculesDashboard;