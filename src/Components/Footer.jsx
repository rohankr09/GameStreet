import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Rohan Kumar. All rights reserved.</p>
        <p>
          Follow on 
          <a href="https://github.com/rohankr09" className="text-blue-500 ml-1">Github</a> |
          <a href="https://www.linkedin.com/in/rohankumar04/" className="text-blue-500 ml-1">Linkedin</a> |
          <a href="https://www.instagram.com/i.rohan.kumar/" className="text-blue-500 ml-1">Instagram</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;