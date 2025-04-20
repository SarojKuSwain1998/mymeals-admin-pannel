import { Button } from "@mui/material";
import { ChevronDown, Menu } from "lucide-react";
import { useRef, useState } from "react";

const Navbar = () => {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [featuresDropdown, setFeaturesDropdown] = useState(false);
  const [ordersDropdown, setOrdersDropdown] = useState(false);

  const profileRef = useRef(null);
  const productsRef = useRef(null);
  const featuresRef = useRef(null);
  const ordersRef = useRef(null);
  const handleProductsDropdown = () => {
    setProductsDropdown(!productsDropdown);
  };

  const handleProfileToggle = () => {
    setProfileDropdown(!profileDropdown);
  };

  return (
    <header className="h-auto w-full justify-between bg-slate-900 px-4 py-4 md:px-8 lg:px-40">
      <nav className="flex items-center justify-between border-b border-gray-700 py-4">
        <a href="/" className="basis-1/2 md:basis-1/3">
          <img
            src="./images/logo.png"
            alt="mymeals logo"
            height={200}
            width={200}
            className="h-auto w-12"
          />
        </a>
        <div
          className="relative w-auto basis-2/4 md:flex md:basis-1/3 md:justify-end"
          ref={profileRef}
        >
          <button onClick={handleProfileToggle}>
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end gap-0">
                <p className="text-base font-semibold text-white">
                  {/* {user?.name} */}John
                </p>
                <p className="text-sm font-normal text-gray-300">
                  {/* {user?.role} */}
                  Admin
                </p>
              </div>
              <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-100">
                <img
                  src="/images/logo.png"
                  alt="Placeholder Image of a user"
                  height={20}
                  width={20}
                  className="flex items-center justify-center"
                />
              </div>
            </div>
          </button>
          {profileDropdown && (
            <div className="absolute right-0 top-12 w-48 rounded-md bg-white shadow-md">
              <ul className="p-2" id="dropdown-menu">
                <li>
                  <a
                    href="/profile"
                    alt="View Profile a"
                    className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/settings"
                    alt="Settings a"
                    className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                </li>
                <hr className="my-2" />
                <li>
                  <Button
                    variant="a"
                    aria-label="Logout button"
                    //   onClick={handleUserLogout}
                    className="flex items-start px-4 py-2 text-base font-normal text-gray-700 shadow-none hover:bg-gray-100"
                  >
                    Logout
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex basis-1/4 justify-end md:hidden md:basis-full">
          <Button
            variant="default"
            className="inline-block w-auto bg-white px-2 py-1 text-gray-700"
          >
            <Menu />
          </Button>
        </div>
      </nav>
      <div className="hidden py-8 text-gray-100 md:block">
        <ul className="flex items-center justify-start gap-x-8">
          <li>
            <a
              href="/"
              alt="Dashboard Page"
              className="text-gray-200 hover:text-gray-50 hover:underline hover:underline-offset-8"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/users"
              alt="a to Reports Page"
              className="text-gray-200 hover:text-gray-50 hover:underline hover:underline-offset-8"
            >
              Users Reports
            </a>
          </li>
          {/* <li>
            <a
              href="/meals"
              alt="a to meals Page"
              className="text-gray-200 hover:text-gray-50 hover:underline hover:underline-offset-8"
            >
              Meals
            </a>
          </li> */}
          <li className="relative" ref={productsRef}>
            <a
              href="#"
              alt=""
              onClick={handleProductsDropdown}
              className="flex items-center"
            >
              Meals
              <ChevronDown
                className={
                  productsDropdown ? "-rotate-180 transition duration-300" : ""
                }
              />
            </a>
            {productsDropdown && (
              <div className="absolute left-0 right-0 top-12 z-50 w-48 rounded-md bg-white shadow-md">
                <ul className="p-2" id="dropdown-menu">
                  <li>
                    <a
                      href="/meals"
                      alt="Meals a"
                      className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={handleProductsDropdown}
                    >
                      Meals Page
                    </a>
                  </li>
                  <li>
                    <a
                      href="/add-meals"
                      alt="Add meals"
                      className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={handleProductsDropdown}
                    >
                      Add Meals
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
