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
// import LoginPage from "./components/Pages/LoginPage";
import ViewOrdersPage from "./components/Pages/ViewOrdersPage";
// import { Sidebar, User } from "lucide-react";
import UserRegister from "./components/Pages/Users/UserRegister";
import ComplaintPage from "./components/Pages/Users/ComplaintPage";
import Mealschedule from "./components/Pages/Users/Mealschedule";
import DeliveryTracking from "./components/Pages/Users/DeliveryTracking";
import AssignOrder from "./components/Pages/Delivery/AssignOrder";
import DeliveryHistory from "./components/Pages/Delivery/DeliveryHistory";
import Sidebar from "./components/Layout/Sidebar";
import { ThemeProvider } from "./components/context/ThemeContext";
import NotificationForm from "./components/Pages/NotificationForm";
import UserLists from "./components/Pages/UserLists";
import TeamsPage from "./components/Pages/TeamsPage";
import AddTeams from "./components/Pages/AddTeams";

import PaymentPage from "./components/Pages/PaymentPage";
import InventoryPage from "./components/Pages/InventoryPage";
import PurchasePage from "./components/Pages/PurchasePage";
import FormListPage from "./components/Pages/FormListPage";
import PauseAndResumeForm from "./components/Forms/PauseAndResumeForm";
import RenewalForm from "./components/Forms/RenewalForm";
import UpdateContactForm from "./components/Forms/UpdateContactForm";
import ChangeDeliveryLocationForm from "./components/Forms/ChangeDeliveryLocationForm.JSX";
import ComplaintForm from "./components/Forms/ComplaintForm";
import LoginPage from "./components/Pages/Admin/LoginPage";

function LayoutWithNavbar() {
  const location = useLocation();

  // Hide Navbar on these paths
  const hideNavbarPaths = ["/login"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <div
      style={{ display: "flex" }}
      // className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white"
      className="bg-white text-black dark:bg-gray-900 dark:text-white"
    >
      {!shouldHideNavbar && <Sidebar />}

      <div
        className={`flex-1 min-h-screen overflow-auto pt-5 ${
          shouldHideNavbar ? "ml-0" : "ml-40"
        } bg-lime-500 text-black dark:bg-black dark:text-white`}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/users" element={<UsersPage />} />
          <Route path="/admin/meals" element={<MealsPage />} />
          <Route path="/admin/add-meals" element={<AddMealsPage />} />
          <Route path="/admin/orders" element={<ViewOrdersPage />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/user-list" element={<UserLists />} />
          <Route path="/admin/add-teams" element={<AddTeams />} />
          <Route path="/admin/payment-page" element={<PaymentPage />} />
          <Route path="/admin/purchase" element={<PurchasePage />} />
          <Route path="/admin/inventory" element={<InventoryPage />} />
          <Route path="/admin/form-list" element={<FormListPage />} />
          <Route path="/pauseandresume" element={<PauseAndResumeForm />} />
          <Route path="/renewal" element={<RenewalForm />} />
          <Route path="/update-contact" element={<UpdateContactForm />} />
          <Route path="/complaint-form" element={<ComplaintForm />} />
          <Route path="/complaint-form" element={<ComplaintForm />} />
          <Route
            path="/change-delivery-location"
            element={<ChangeDeliveryLocationForm />}
          />
          <Route path="/admin/teams" element={<TeamsPage />} />
          <Route path="/admin/template" element={<NotificationForm />} />
          <Route path="/user/user-register" element={<UserRegister />} />
          <Route path="/user/schedule-meals" element={<Mealschedule />} />
          <Route path="/user/compaintpage" element={<ComplaintPage />} />
          <Route
            path="/user/delivery-tracking"
            element={<DeliveryTracking />}
          />
          <Route path="/delivery/assign-orders" element={<AssignOrder />} />
          <Route
            path="/delivery/delivery-history"
            element={<DeliveryHistory />}
          />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <LayoutWithNavbar />
      </ThemeProvider>
    </Router>
  );
}

export default App;
