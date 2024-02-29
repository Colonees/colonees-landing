import React from 'react';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './Routers';


const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};
export default App;
