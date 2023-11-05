import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import PaymentIcon from '@mui/icons-material/Payment';
import PersonIcon from '@mui/icons-material/Person';
import GradingIcon from '@mui/icons-material/Grading';

const Sidebar: React.FC = () => {
  return (
    <>
      <aside className="flex flex-col w-1/4 gap-3 overflow-y-auto bg-[#110B11] text-white">
        <header className="flex flex-col items-center justify-center h-1/6 bg-[#110B11]">
          <h1 className="text-3xl text-gray-600">School Management</h1>
        </header>
        <nav className="flex flex-col items-center justify-center gap-3">
          <NavLink to="/home/feeCategory" className="text-gray-600" ><PaymentIcon color='info' /> FeeSetup</NavLink>
          <NavLink to="/home/grades" className="text-gray-600"><GradingIcon color='info'/> Grades</NavLink>
          <NavLink to="/home/students" className="text-gray-600"><PersonIcon color='info'/> Students</NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
