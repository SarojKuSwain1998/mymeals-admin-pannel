import { Button } from "@mui/material";
import { ChevronDown, LayoutDashboard, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Sidebar = () => {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [usersDropdown, setUsersDropdown] = useState(false);
  const [deliveryDropdown, setDeliveryDropdown] = useState(false);

  const profileRef = useRef(null);
  const productsRef = useRef(null);
  const usersRef = useRef(null);
  const deliveryRef = useRef(null);

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setProfileDropdown(false);
    }
    if (productsRef.current && !productsRef.current.contains(event.target)) {
      setProductsDropdown(false);
    }
    if (usersRef.current && !usersRef.current.contains(event.target)) {
      setUsersDropdown(false);
    }
    if (deliveryRef.current && !deliveryRef.current.contains(event.target)) {
      setDeliveryDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside className="h-screen w-64 bg-white p-8   text-black fixed">
      <div className="flex items-center mb-8">
        <img src="./images/logo.png" alt="Logo" className="w-16 h-16 mr-2" />
        <span className="text-xl font-semibold">MyMeals</span>
      </div>

      <ul className="space-y-4">
        <li className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-400 bg-gray-300 rounded-md border">
          <LayoutDashboard className="text-gray-700" />
          <a href="/" className="hover:text-gray-600  text-gray-800">
            Dashboard
          </a>
        </li>

        <li ref={productsRef}>
          <button
            onClick={() => setProductsDropdown(!productsDropdown)}
            className="flex  px-3 hover:bg-gray-300 rounded-md items-center justify-between w-full py-2 hover:border-gray-300"
          >
            <span>Admin Panel</span>
            <ChevronDown
              className={
                productsDropdown ? "rotate-180 transition" : "transition"
              }
            />
          </button>
          {productsDropdown && (
            <ul className="pl-4 text-gray-800 space-y-3">
              <li>
                <a
                  href="/users"
                  className="block py-1 hover:underline hover:text-black transition duration-300 ease-in-out"
                >
                  Users Reports
                </a>
              </li>
              <li>
                <a
                  href="/meals"
                  className="block py-1 hover:underline hover:text-black transition duration-300 ease-in-out"
                >
                  Meals Page
                </a>
              </li>
              <li>
                <a
                  href="/add-meals"
                  className="block py-1 hover:underline hover:text-black transition duration-300 ease-in-out"
                >
                  Add Meals
                </a>
              </li>
              <li>
                <a
                  href="/orders"
                  className="block py-1 hover:underline hover:text-black transition duration-300 ease-in-out"
                >
                  View Orders
                </a>
              </li>
            </ul>
          )}
        </li>

        <li ref={usersRef}>
          <button
            onClick={() => setUsersDropdown(!usersDropdown)}
            className="flex  px-3 hover:bg-gray-300 rounded-md items-center justify-between w-full py-2 hover:border-gray-300"
          >
            <span>User Panel</span>
            <ChevronDown
              className={usersDropdown ? "rotate-180 transition" : "transition"}
            />
          </button>
          {usersDropdown && (
            <ul className="pl-4 text-gray-800 space-y-3">
              <li>
                <a
                  href="/user/user-register"
                  className="block py-1 hover:underline hover:text-black transition duration-300 ease-in-out"
                >
                  User Register
                </a>
              </li>
              <li>
                <a
                  href="/user/schedule-meals"
                  className="block py-1 hover:underline hover:text-black transition duration-300 ease-in-out"
                >
                  Schedule Meals
                </a>
              </li>
              <li>
                <a
                  href="/user/compaintpage"
                  className="block py-1 hover:underline hover:text-black transition duration-300 ease-in-out"
                >
                  Complaint Form
                </a>
              </li>
              <li>
                <a
                  href="/user/delivery-tracking"
                  className="block py-1 hover:underline hover:text-black transition duration-300 ease-in-out"
                >
                  Tracking Delivery
                </a>
              </li>
            </ul>
          )}
        </li>

        <li ref={deliveryRef}>
          <button
            onClick={() => setDeliveryDropdown(!deliveryDropdown)}
            className="flex  px-3 hover:bg-gray-300 rounded-md items-center justify-between w-full py-2 hover:border-gray-300"
          >
            <span>Delivery Panel</span>
            <ChevronDown
              className={
                deliveryDropdown ? "rotate-180 transition" : "transition"
              }
            />
          </button>
          {deliveryDropdown && (
            <ul className="pl-4 space-y-3 text-gray-800">
              <li>
                <a
                  href="/delivery/assign-orders"
                  className="block py-1 hover:underline hover:text-black transition duration-300 ease-in-out"
                >
                  Assign Orders
                </a>
              </li>
              <li>
                <a
                  href="/delivery/delivery-history"
                  className="block py-1 hover:underline hover:text-black transition duration-300 ease-in-out"
                >
                  Delivery History
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>

      {/* Profile Section */}
      {/* <div className="absolute bottom-4 left-4 right-4" ref={profileRef}>
        <button
          onClick={() => setProfileDropdown(!profileDropdown)}
          className="flex items-center gap-3 w-full"
        >
          <div className="flex-1">
            <p className="text-sm font-semibold">John</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
          <img
            src="/images/logo.png"
            alt="User"
            className="w-8 h-8 rounded-full bg-white"
          />
        </button>
        {profileDropdown && (
          <div className="mt-2 w-full rounded-md bg-white text-gray-800 shadow-md">
            <ul className="p-2">
              <li>
                <a
                  href="/profile"
                  className="block py-1 hover:bg-gray-100 px-2 rounded"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="/settings"
                  className="block py-1 hover:bg-gray-100 px-2 rounded"
                >
                  Settings
                </a>
              </li>
              <hr className="my-2" />
              <li>
                <a href="/login">
                  <Button
                    fullWidth
                    variant="outlined"
                    className="text-gray-700"
                  >
                    Logout
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div> */}
      <div>
        <a href="/login">
          <button className="border bg-gray-300 hover:bg-gray-500 rounded-md py-2 absolute bottom-4 left-4 right-8">
            Logout
          </button>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
