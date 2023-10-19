import React from "react";
import './Fees.css'
import {Select, TextField, Button, MenuItem} from "@mui/material";

export const Fees:React.FC = () => {
    return (

            <div className="flex flex-row items-center border border-r-1 p-3 gap-3 w-fulls bg-white mt-2">
                <div className="flex flex-col items-center p-3 gap-3 w-1/2 border border-r-1">
                    <h1 className="text-base">Add Fee</h1>
                    <TextField label="Fee name" variant="outlined" style={{width: "100%"}}/>
                    <TextField label="Amount" variant="outlined" type="number" style={{width: "100%"}}/>
                    <Select label="Fee Type" style={{width: "100%"}}>
                        <MenuItem value="School Fees">
                            School Fees
                        </MenuItem>
                    </Select>
                    <Button style={{width:"100%"}} variant="contained">Add Fee</Button>
                </div>
                <div className="flex flex-col items-center p-3 gap-3 w-1/2 border border-r-1">
                    <h1 className="text-base">Your Fees</h1>
                </div>
            </div>

    )
}