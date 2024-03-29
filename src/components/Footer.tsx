import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="h-16 w-16 bg-gray-700 rounded-full mb-4"></div>
            <p className="text-sm">YugAmjTeam</p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-lg">
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-sm">YugAmj Team</p>
            <p className="text-sm">BTM Layout </p>
            <p className="text-sm">2nd stage</p>
            <p className="text-sm">+91 1234567890</p>
            <p className="text-sm">info@amjteam.com</p>
          </div>
          {/* Social Media Section */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-sm hover:text-gray-300">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-sm hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-sm hover:text-gray-300">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-sm text-center md:text-left md:flex md:justify-between">
          <div className="mb-4 md:mb-0">
            <a href="#" className="mr-4 hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="mr-4 hover:text-gray-300">
              Imprint
            </a>
            <a href="#" className="mr-4 hover:text-gray-300">
              Copyright Information
            </a>
            <p className="mt-2">&copy; AMJ Team . All Rights Reserved.</p>
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="mr-4 hover:text-gray-300">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
