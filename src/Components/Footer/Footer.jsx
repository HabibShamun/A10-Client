import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-primary text-white px-6 py-10 font-semibold">
        {/* Branding Section */}
        <aside className="flex flex-wrap items-center gap-4">
          <img
            className="w-20 sm:w-24 hover:animate-spin"
            src="https://i.postimg.cc/y6RVqbXm/logo-removebg-preview.png"
            alt="EcoTrack Logo"
          />
          <div>
            <h2 className="text-lg font-semibold">EcoTrack</h2>
            <p className="text-sm font-semibold">Sustainable living, one step at a time.</p>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-white/80 text-center sm:text-right">
              Accessible for everyone. Privacy-Friendly by Design.
            </p>
          </div>
        </aside>

        {/* Company Section */}
        <nav>
          <h6 className="footer-title text-lg mb-2 font-semibold">Company</h6>
          <ul className="space-y-2">
            <li>
              <button
                className="link link-hover text-white font-semibold"
                onClick={() => document.getElementById('about_modal').showModal()}
              >
                About us
              </button>
            </li>
            <li>
              <button
                className="link link-hover text-white font-semibold"
                onClick={() => document.getElementById('contact_modal').showModal()}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Social Section */}
        <nav>
          <h6 className="footer-title text-lg mb-2 font-semibold">Social</h6>
          <div className="flex gap-4 text-xl text-white">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
              <AiFillInstagram />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
              <FaSquareXTwitter />
            </a>
          </div>
          <p className="mt-3 text-sm font-semibold text-white text-center sm:text-right">
            &copy; 2025 EcoTrack. All rights reserved.
          </p>
        </nav>
      </footer>

      {/* About Modal */}
      <dialog id="about_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">About EcoTrack</h3>
          <p className="py-4 text-sm leading-relaxed">
            EcoTrack is a platform dedicated to promoting sustainable living through community-driven challenges,
            educational tips, and eco-friendly events. Our mission is to empower individuals to make small changes
            that lead to a big impact. Whether you're reducing plastic use, conserving energy, or planting trees,
            EcoTrack helps you track your progress and inspire others to join the movement.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Contact Modal */}
      <dialog id="contact_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <p className="py-4 text-sm leading-relaxed">
            We'd love to hear from you! Reach out to us at <strong>support@ecotrack.org</strong> or follow us on social media.
            Whether you have questions, feedback, or partnership ideas — we're here to help.
            <br /><br />
            <strong>Address:</strong> 126/1 Modushohid, Sylhet, Bangladesh<br />
            <strong>Phone:</strong> +880-***********
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Footer;
