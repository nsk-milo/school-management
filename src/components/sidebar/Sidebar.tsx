import React from "react";
import './Sidebar.css'
import {Button, ButtonGroup} from "@mui/material";
import {Add, Home, Logout, Person, Sell} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const Sidebar: React.FC = () => {

    const navigation = useNavigate();

    const navigateToGrade = () => {
        navigation('/grades');
    }

    const navigateToHome = () => {
        navigation('/home');
    }

    const buttons = [
        <Button  key="Home" style={{height: "80px"}} startIcon={<Home/>} variant="text" onClick={navigateToHome}>Home</Button>,
        <Button  key="Add" style={{height: "80px"}} startIcon={<Add/>} variant="text" onClick={navigateToGrade}>Setup</Button>,
        <Button key="Student" style={{height: "80px"}} startIcon={<Person/>} variant="text">Student</Button>,
        <Button key="Fees" style={{height: "80px"}} startIcon={<Sell/>} variant="text">Fees</Button>,
        <Button key="Logout" style={{height: "80px"}} startIcon={<Logout/>} variant="text">Logout</Button>,
    ];

    return (
        <>
            <aside className="flex flex-col w-1/4 gap-3 bg-gray-800 text-white">
                <header className="flex flex-col items-center justify-center h-1/6 bg-gray-900 shadow-md">
                    <h1 className="text-3xl">School Management</h1>

                </header>
                <ButtonGroup orientation="vertical" aria-label="vertical outline button group" variant="text"
                             color="inherit">
                    {buttons}
                </ButtonGroup>
            </aside>
        </>
    )
}


export default Sidebar;