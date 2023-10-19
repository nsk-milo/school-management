import React from "react";
import "./FeeCategory.css";
import {TextField, Button, Select, MenuItem} from "@mui/material";
import {Fees} from "./fees/Fees.tsx";


export const FeeCategory: React.FC = () => {
    return (
        <>
            <div className="flex flex-row p-5 gap-2 w-full bg-white">
                <div className='flex flex-col  items-center border border-r-1 p-3 gap-3 w-1/2'>
                    <h4 className="text-base text-gray-600">Add Fee category</h4>

                    <TextField
                        label="Fee Category" variant="outlined"
                        style={{width: "100%"}}
                    />

                    <Button variant="contained" style={{width: "100%"}}>Add Category</Button>
                </div>

                <div className='flex flex-col items-center border border-r-1 p-3 gap-3 w-1/2'>
                    <h4 className="text-base text-gray-600">Your Fee category</h4>
                </div>

            </div>

            <div className="flex flex-row p-5 gap-2 w-full bg-white mt-2">
                <div className='flex flex-col  items-center border border-r-1 p-3 gap-3 w-1/2'>
                    <h4 className="text-base text-gray-600">Add Grades</h4>

                    <Select label="Grades" style={{width: "100%"}}>
                        <MenuItem value="Grade One">Grade One</MenuItem>
                        <MenuItem value="Grade Two">Grade Two</MenuItem>
                        <MenuItem value="Grade Three">Grade Three</MenuItem>
                        <MenuItem value="Grade Four">Grade Four</MenuItem>
                        <MenuItem value="Grade Five">Grade Five</MenuItem>
                        <MenuItem value="Grade Six">Grade Six</MenuItem>
                        <MenuItem value="Grade Seven">Grade Seven</MenuItem>
                        <MenuItem value="Grade Eight">Grade Eight</MenuItem>
                        <MenuItem value="Grade Nine">Grade Nine</MenuItem>
                    </Select>

                    <Select label="Term" style={{width: "100%"}}>
                        <MenuItem value="Term One">Term One</MenuItem>
                        <MenuItem value="Term Two">Term Two</MenuItem>
                        <MenuItem value="Term Three">Term Three</MenuItem>
                    </Select>

                    <Button variant="contained" style={{width: "100%"}}>Add Grade</Button>
                </div>

                <div className='flex flex-col items-center border border-r-1 p-3 gap-3 w-1/2'>
                    <h4 className="text-base text-gray-600">Your Grade</h4>
                </div>



            </div>
            <Fees/>
        </>
    );
};
