import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../images/gd11-logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} alt="GD11 Logo" className="h-10 mb-4" />
          </div>
          <div className="flex space-x-4 items-center">
            <FaFacebook className="h-6 w-6" />
            <FaInstagram className="h-6 w-6" />

          </div>
        </div>
        <hr className="my-4 border-gray-700" />
        <div className="text-sm">
          <p>Kangstem Biotech Co., Ltd.</p>
          <p>8th floor of Bojeon Building, 725, Eonju-ro, Gangnam-gu, Seoul (06050) | TEL : 02-2137-2200 | FAX : 02-2088-8290 | E-mail : gd11@kangstem.com</p>
          <p>Customer Center 1644-3957 | Operating Hours : Mon-Fri 10:00 ~ 18:00 | Lunch 12:00 ~ 13:00 | Closed on weekends and public holidays</p>
          <p>2018 gd-11. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
