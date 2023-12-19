// Layout component
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Navbar />
      <main style={{ paddingBottom: '200px' }}>{children}</main>
      <div className="lg:absolute lg:left-0 lg:top-0 lg:w-[400px]">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
