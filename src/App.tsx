import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashoard/Dashboard";
import Grade from "./components/grade/Grade";
import { FeeCategory } from "./components/fee-category/FeeCategory";
import {Students} from "./components/students/Students.tsx";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <head>
          <title>School-System</title>
          <meta name="description" content="desing by nsk-milo" />
        </head>
        <main className="flex min-h-screen flex-col bg-[#F3F4F7] items-center justify-center">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Dashboard />} >
              <Route path="feeCategory" element={<FeeCategory/>}/>
              <Route path="grades" element={<Grade />} />
              <Route path="students" element={<Students/>}/>
            </Route>
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;
