import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout; 