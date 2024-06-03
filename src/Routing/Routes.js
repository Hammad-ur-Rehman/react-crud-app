import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Create from "../Pages/Create";
import Update from "../Pages/Update";
import Read from "../Pages/Read";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
