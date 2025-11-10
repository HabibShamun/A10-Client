import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-primary text-white px-6 py-10 font-semibold">
  {/* Branding Section */}
  <aside className="flex items-center gap-4">
    <img
      className="w-25 sm:w-30 hover:animate-spin"
      src="https://i.postimg.cc/y6RVqbXm/logo-removebg-preview.png"
      alt="EcoTrack Logo"
    />
    <div>
      <h2 className="text-lg font-semibold">EcoTrack</h2>
      <p className="text-sm font-semibold">Sustainable living, one step at a time.
      </p>
      <p className="mt-1 text-xs sm:text-sm font-semibold text-white/80 text-center sm:text-right">
  Accessible for everyone. Privacy-Friendly by Design.
</p>
    </div>
  </aside>

  {/* Company Section */}
  <nav>
    <h6 className="footer-title text-lg mb-2 font-semibold">Company</h6>
    <ul className="space-y-2">
      <li><Link to="/about" className="link link-hover text-white font-semibold">About us</Link></li>
      <li><Link to="/contact" className="link link-hover text-white font-semibold">Contact</Link></li>
    </ul>
  </nav>

  {/* Social Section */}
  <nav>
    <h6 className="footer-title text-lg mb-2 font-semibold">Social</h6>
    <div className="flex gap-4 text-xl text-white">
      <a href="https://www.facebook.com/" className="hover:text-white transition-colors duration-200"><FaFacebook /></a>
      <a href="https://www.instagram.com/" className="hover:text-white transition-colors duration-200"><AiFillInstagram /></a>
      <a href="#" className="hover:text-white transition-colors duration-200"><FaSquareXTwitter /></a>
    </div>
    <p className="mt-3 text-sm font-semibold text-white text-center sm:text-right">
      &copy; 2025 EcoTrack. All rights reserved.
    </p>
    
  </nav>
</footer>

  );
};

export default Footer;