import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Error = () => {
    return (
        <div>
                <div>
                <header>
             
                    <Navbar></Navbar>
                </header>
                <div className='flex justify-center items-center'>
                       <img src={`https://images.unsplash.com/photo-1506702315536-dd8b83e2dcf9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} alt="404" />
             </div>
             <Footer></Footer>
            </div>
        </div>
    );
};

export default Error;