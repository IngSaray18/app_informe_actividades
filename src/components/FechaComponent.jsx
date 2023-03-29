import { DateRangePicker, DateRange } from "@mui/lab";
import { Box, TextField } from "@mui/material";
import React, { useState } from "react";

const FechaComponent = () => {
	const [value, setvalue] = useState < DateRange < Date >> [null, null];
console.log(value);
	return (
		<Box width="500px">
			<DateRangePicker
				startText="Desde"
				endText="Hasta"
				value={value}
				onChange={(newValue)=>{
                    setvalue(newValue)
                }}
                renderInput={ (startProps,endProps)=>(
                    <>
                    <TextField  {...startProps} />
                    <Box  >a:</Box>
                    <TextField {...endProps} />
                    </>
                    
                ) }
			/>
		</Box>
	);
};

export default FechaComponent;
