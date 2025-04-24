import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import UsersPage from "./components/Pages/UsersPage";
import HomePage from "./components/Pages/HomePage";
import MealsPage from "./components/Pages/MealsPage";
import AddMealsPage from "./components/Pages/AddMealsPage";
import LoginPage from "./components/Pages/LoginPage";
import ViewOrdersPage from "./components/Pages/ViewOrdersPage";
import { User } from "lucide-react";
import UserRegister from "./components/Pages/Users/UserRegister";
import ComplaintPage from "./components/Pages/Users/ComplaintPage";
import Mealschedule from "./components/Pages/Users/Mealschedule";
import DeliveryTracking from "./components/Pages/Users/DeliveryTracking";

function LayoutWithNavbar() {
  const location = useLocation();

  // Hide Navbar on these paths
  const hideNavbarPaths = ["/login"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/meals" element={<MealsPage />} />
        <Route path="/add-meals" element={<AddMealsPage />} />
        <Route path="/orders" element={<ViewOrdersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/user-register" element={<UserRegister />} />
        <Route path="/user/schedule-meals" element={<Mealschedule />} />
        <Route path="/user/compaintpage" element={<ComplaintPage />} />
        <Route path="/user/delivery-tracking" element={<DeliveryTracking />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWithNavbar />
    </Router>
  );
}

export default App;
