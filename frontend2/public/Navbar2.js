// import React, { useState } from 'react';
// import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleMouseEnter = () => {
//     setIsDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsDropdownOpen(false);
//   };

//   return (
//     <header className="bg-white shadow relative">
//       <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//         <h1 className="text-3xl font-bold text-gray-900">GD11</h1>
//         <nav className="flex space-x-16">
//           <div
//             className="relative"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <a href="#product" className="text-gray-500 hover:text-gray-900 relative">
//               Product
//               <div className="absolute left-0 right-0 h-1 bg-transparent hover:bg-black transition-all duration-300"></div>
//             </a>
//             {isDropdownOpen && (
//               <>
//                 {/* Main dropdown container */}
//                 <div className="absolute left-0 mt-2 w-full bg-white shadow-lg py-4 z-10">
//                   <div className="max-w-7xl mx-auto flex justify-center space-x-8 px-8">
//                     <a href="#all" className="px-6 py-2 text-gray-800 hover:bg-gray-100">ALL</a>
//                     <a href="#premium" className="px-6 py-2 text-gray-800 hover:bg-gray-100">PREMIUM<sup>RX</sup></a>
//                     <a href="#advanced" className="px-6 py-2 text-gray-800 hover:bg-gray-100">ADVANCED LAB ENERGY</a>
//                     <a href="#cell" className="px-6 py-2 text-gray-800 hover:bg-gray-100">CELL FACTORY</a>
//                     <a href="#esthe" className="px-6 py-2 text-gray-800 hover:bg-gray-100">ESTHÉ Rx</a>
//                   </div>
//                 </div>
//                 {/* Additional white container below the main dropdown */}
//                 <div className="absolute left-0 top-full w-screen bg-white shadow-lg py-4 z-10"></div>
//               </>
//             )}
//           </div>
//           <a href="#about" className="text-gray-500 hover:text-gray-900 relative">
//             About GD11
//             <div className="absolute left-0 right-0 h-1 bg-transparent hover:bg-black transition-all duration-300"></div>
//           </a>
//           <a href="#contact" className="text-gray-500 hover:text-gray-900 relative">
//             Contact Us
//             <div className="absolute left-0 right-0 h-1 bg-transparent hover:bg-black transition-all duration-300"></div>
//           </a>
//         </nav>
//         <div className="flex space-x-4">
//           <a href="#cart" className="text-gray-500 hover:text-gray-900"><FaShoppingCart /></a>
//           <a href="#profile" className="text-gray-500 hover:text-gray-900"><FaUser /></a>
//         </div>
//         <div className="sm:hidden">
//           <FaBars className="text-gray-500" />
//         </div>
//       </div>

//       {/* Invisible hover area */}
//       <div
//         className="absolute left-0 right-0 top-0 bottom-0"
//         style={{ top: '0', height: '3rem' }}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       ></div>
//     </header>
//   );
// };




// const FlyoutLink = ((children, href, FlyoutContent)) ==> {
//     return (
//         <div className="relative h-fit w-fit"> 
//         <a href={href} className="relative text-white">
//         {children} 
//         /* do the under line animation thing */
//         </a>
       

//     </div>
//     );
// };
// export default Navbar;
