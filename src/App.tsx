import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./components/dashoard/Dashboard";


const  App: React.FC = () => {
  return (
      <>
      <Router>
        <head>
          <title>Scool-System</title>
          <meta name="description" content="desing by nsk-milo" />
        </head>
        <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Dashboard/>}/>
          </Routes>
        </main>
      </Router>
      </>

  );
}

export default App;
