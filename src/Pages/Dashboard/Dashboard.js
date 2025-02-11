import React from 'react';
// import "../assets_dashboard/css/style.css";

import HeaderDashboard from './HeaderDashboard';
import SidebarDashboard from './SidebarDashboard';
import BodyDashboard from './BodyDashboard';


const Dashboard = () => {
  return (
    <div >

      {/* ======= Header ======= */}
      <HeaderDashboard />
      {/* End Header */}

      {/* ======= Sidebar ======= */}
      <SidebarDashboard />
      {/* End Sidebar*/}

      {/* ======= Body ======= */}
      <BodyDashboard />
      {/* End Body*/}


      <footer id="footer" className="footer">
        <div className="copyright">
          © Copyright <strong><span>OnTheRoad</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">MadeByMe</a>
        </div>
      </footer>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>


    </div>

  );
};

export default Dashboard;