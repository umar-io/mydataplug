import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Brand from "../assets/3050337-200.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footercolorscheme text-white py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between">
          {/* Brand and Description */}
          <div className="mb-6 lg:mb-0">
            <img src={Brand} alt="" className="w-[50px]"/>
            <p className="text-white">
              Your one-stop solution for easy and convenient bill payments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 lg:mb-0">
            <h4 className="text-lg font-medium mb-3">Quick Links</h4>
            <ul className="text-white">
              <li className='mb-2'><Link to="#">Home</Link></li>
              <li className='mb-2'><Link to="#">About Us</Link></li>
              <li className='mb-2'><Link to="#">Services</Link></li>
              <li className='mb-2'><Link to="#">Contact</Link></li>
              <li className='mb-2'><Link to="#">FAQ</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-medium mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-xl hover:text-gray-300 transition-colors duration-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl hover:text-gray-300 transition-colors duration-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-gray-300 transition-colors duration-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-xl hover:text-gray-300 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="text-center mt-12 text-white text-sm">
          &copy; {currentYear} Mydataplug. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
