import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import Navbar from "./components/Layout/Navbar";
import UsersPage from "./components/Pages/UsersPage";
import HomePage from "./components/Pages/HomePage";
import MealsPage from "./components/Pages/MealsPage";
import AddMealsPage from "./components/Pages/AddMealsPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/meals" element={<MealsPage />} />
          <Route path="/add-meals" element={<AddMealsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
