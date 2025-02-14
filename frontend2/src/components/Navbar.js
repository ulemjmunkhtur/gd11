import React, { useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../images/gd11-logo.png'; // Adjust the path based on your project structure

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 16px 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  height: 32px;
`;

const NavLink = styled(Link)`  // Use Link component
  color: #333;
  font-weight: 500;
  margin: 0 16px;
  text-decoration: none;
  &:hover {
    color: #000;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-left: 16px;
    color: #333;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
`;

const FlyoutLinkContainer = styled.div`
  position: relative;
`;

const FlyoutContentContainer = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 48px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transform: translateX(-50%);
  z-index: 10;
`;

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = open && FlyoutContent;

  return (
    <FlyoutLinkContainer
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink to={href}>{children}</NavLink>
      <AnimatePresence>
        {showFlyout && (
          <FlyoutContentContainer
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <FlyoutContent />
          </FlyoutContentContainer>
        )}
      </AnimatePresence>
    </FlyoutLinkContainer>
  );
};

const ProductContent = () => {
  return (
    <div className="w-64 p-4 bg-white shadow-xl rounded-md">
      <div className="flex flex-col space-y-4">
        <NavLink to="#">ALL</NavLink>
        <NavLink to="/productsearch">PREMIUM<sup>RX</sup></NavLink>
        <NavLink to="#">ADVANCED LAB ENERGY</NavLink>
        <NavLink to="#">CELL FACTORY</NavLink>
        <NavLink to="#">ESTHÉ Rx</NavLink>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <GlobalStyle />
      <NavbarContainer>
        <div className="flex space-x-8 items-center">
          <Link to="/">
            <Logo src={logo} alt="GD11 Logo" />
          </Link>
          <FlyoutLink href="/productsearch" FlyoutContent={ProductContent}>Products</FlyoutLink>
          <NavLink to="/about">About GD11</NavLink>
        </div>
        <IconContainer>
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
          <NavLink to="/signup">
            <FaUser />
          </NavLink>
        </IconContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
