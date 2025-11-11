import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const PublicLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
      <header className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </header>
            
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default PublicLayout;