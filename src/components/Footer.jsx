import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <p>© {new Date().getFullYear()} ChefKart | Built with ❤️ using React & Bootstrap</p>
    </footer>
  );
};

export default Footer;
