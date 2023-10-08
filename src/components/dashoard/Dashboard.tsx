import React, { useEffect } from "react";
import "./Dashboard.css";
import Sidebar from "../sidebar/Sidebar.tsx";
import { AccountCircle } from "@mui/icons-material";
import type { RootState } from "../../store/store.ts";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Grade from "../grade/Grade.tsx";
import { BrowserRouter as Router } from "react-router-dom";

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.message);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/");
  };

  useEffect(() => {
    if (user == null) {
      navigateToLogin();
    }
    console.log("message is ", user);
  }, [navigate, navigateToLogin, user]);

  return (
    <>
      <div className="flex flex-row min-h-screen min-w-full">
        <Sidebar />
        <div className="flex flex-col w-3/4 gap-4">
          <header className="bg-white h-1/6 flex flex-row items-center justify-end p-2 shadow-md">
            <h1 className="text-gray-800">
              {user.firstname} {user.firstname}
            </h1>{" "}
            <AccountCircle color={"disabled"} />
          </header>
          <section className="bg-white flex flex-col shadow-md m-5 p-3">
            <h1 className="text-3xl text-gray-600">My Classes </h1>
          </section>
          <section className="flex flex-row h-5/6 shadow-md m-5 p3 bg-white">
          
              <Routes>
                <Route path="/grades" element={<Grade />} />
              </Routes>
            
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
