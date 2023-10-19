import React from "react";
import "./Grade.css";
import { Box, Tab, Tabs } from "@mui/material";

const Grade: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
    <>
      <div  className="flex flex-col p-3 gap-2 w-full bg-white">
        <Box sx={{borderBottom: 1, borderColor: 'divider'}} >
            <Tabs value={value} onChange={handleChange} scrollButtons
                  allowScrollButtonsMobile variant='scrollable'>
                <Tab label="Grade One"/>
                <Tab label="Grade Two"/>
                <Tab label="Grade three"/>
                <Tab label="Grade four"/>
                <Tab label="Grade five"/>
                <Tab label="Grade six"/>
                <Tab label="Grade seven"/>
                <Tab label="Grade Eight"/>
                <Tab label="Grade nine"/>
            </Tabs>
        </Box>
      </div>
    </>
  );
};

export default Grade;
