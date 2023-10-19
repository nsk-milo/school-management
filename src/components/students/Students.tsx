import React from "react";
import './Student.css'
import  {TextField, Button,Select,MenuItem} from '@mui/material'

export const Students:React.FC = () => {
    return (
       <>
        <div className='flex flex-col items-center p-3 gap-2 border m-2 w-1/2 border-r-1 bg-white'>
            <h1 className="text-base text-gray-600">Register Student</h1>
            <TextField variant="outlined" label="first name" type='text' style={{width:"100%"}}/>
            <TextField variant="outlined" label="last name" type='text' style={{width:"100%"}}/>
            <TextField variant="outlined" type='date' style={{width:"100%"}}/>
            <Select value="Select Grade" style={{width:"100%"}}>
                <MenuItem defaultValue="Grade One">Grade One</MenuItem>
                <MenuItem defaultValue="Grade Two">Grade Two</MenuItem>
                <MenuItem defaultValue="Grade Three">Grade Three</MenuItem>
            </Select>
            <Button variant='contained' style={{width:"100%"}}>Add Student</Button>
        </div>
       </>
    )
}