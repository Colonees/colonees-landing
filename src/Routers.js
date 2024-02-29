import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PrivacyPolicy from "./page/PrivacyProlicy";
import Home from "./Home";

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={< PrivacyPolicy />} />
    </Routes>
  );
};

export default AppRoutes;
