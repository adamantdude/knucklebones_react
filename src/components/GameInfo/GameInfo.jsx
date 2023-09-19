import { Box, Card } from "@mui/material";

function GameInfo() {

    return (
            <Box sx={{ display:"flex", justifyContent:"center", mt:"5px", mb:"5px" }}>
                <Card variant="outlined" sx={{ height:"4em", width:"4em" }}></Card>
                <Card variant="outlined" sx={{ height:"4em", width:"4em" }}></Card>
                <Card variant="outlined" sx={{ height:"4em", width:"4em" }}></Card>
                <Card variant="outlined" sx={{ height:"4em", width:"4em" }}></Card>
            </Box>
    )

}

export default GameInfo;