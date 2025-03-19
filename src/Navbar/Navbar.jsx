import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h2 className="text-2xl font-bold text-white">
                Sunil Kumar Kashyap
              </h2>
              {/* <img className="w-8 h-8 text-white" src="/logo.svg" alt="Logo" /> */}
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <NavLink
                  to="/sunilkumar"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-500" : "text-gray-300"
                    } px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-ornage-500 hover:bg-gray-700`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-500" : "text-gray-300"
                    } px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="skill"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-500" : "text-gray-300"
                    } px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700`
                  }
                >
                  My Skills
                </NavLink>
                <NavLink
                  to="service"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-500" : "text-gray-300"
                    } px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700`
                  }
                >
                  Services
                </NavLink>
                <NavLink
                  to="project"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-500" : "text-gray-300"
                    } px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700`
                  }
                >
                  My Project
                </NavLink>
                <NavLink
                  to="gallery"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-500" : "text-gray-300"
                    } px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700`
                  }
                >
                  Gallery
                </NavLink>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-500" : "text-gray-300"
                    } px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700`
                  }
                >
                  Contact
                </NavLink>

                <NavLink
                  to="login"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-orange-500" : "text-gray-300"
                    } px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700`
                  }
                >
                  Login
                </NavLink>

                <div className="relative group">
                  <NavLink
                    to="service"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-orange-500" : "text-gray-300"
                      } px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700`
                    }
                  >
                    My Work
                  </NavLink>
                  <div className="absolute left-0 hidden w-48 mt-2 bg-gray-800 rounded-md shadow-lg group-hover:block">
                    <NavLink
                      to="webdevelopment"
                      className={({ isActive }) =>
                        `${
                          isActive ? "text-orange-500" : "text-gray-300"
                        } block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white`
                      }
                    >
                      Web Development
                    </NavLink>
                    <NavLink
                      to="appdevelopment"
                      className={({ isActive }) =>
                        `${
                          isActive ? "text-orange-500" : "text-gray-300"
                        } block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white`
                      }
                    >
                      App Development
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex -mr-2 md:hidden">
            <button
              onClick={toggleMenu}
              className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-500" : "text-gray-300"
              } block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-500" : "text-gray-300"
              } block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700`
            }
          >
            About
          </NavLink>
          <NavLink
            to="skill"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-500" : "text-gray-300"
              } block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700`
            }
          >
            Skill
          </NavLink>
          <NavLink
            to="service"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-500" : "text-gray-300"
              } block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="project"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-500" : "text-gray-300"
              } block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700`
            }
          >
            My Project
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `${
                isActive ? "text-orange-500" : "text-gray-300"
              } px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
