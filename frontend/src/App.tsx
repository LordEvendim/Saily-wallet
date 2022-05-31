import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { NavigationBar } from "./components/NavigationBar";
import { About } from "./components/pages/About";
import { Dashboard } from "./components/pages/Dashboard";
import { FormPage } from "./components/pages/Form";
import { Mainpage } from "./components/pages/Mainpage";

const App: React.FC<{}> = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </>
  );
};

export default App;
