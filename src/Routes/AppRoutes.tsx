import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Create from "../Pages/CreateUser";
import Update from "../Pages/UpdateUser";
import Read from "../Pages/UserDetails";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
