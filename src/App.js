import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GloanRoutes from "./routes";
import "./App.css";
import { AuthProvider } from "./context/auth";


const App = () => {


  return (
    <AuthProvider>
      <Router>
        <GloanRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
