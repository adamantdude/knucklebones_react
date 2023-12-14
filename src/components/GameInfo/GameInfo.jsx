import { Box, Button, Card, CardContent, Typography } from "@mui/material";

function GameInfo({ player }) {

    return (
            <Box sx={{ display:"flex", justifyContent:"center", mt:"5px", mb:"5px" }}>
                <Card variant="outlined" sx={{ height:"4em", width:"7em" }}>
                    <CardContent sx={{ textAlign:'center' }}>
                        {!player ? 
                        <Typography>P1</Typography> 
                        : 
                        <Typography>P2</Typography>
                        }
                    </CardContent>
                </Card>
                <Card variant="outlined" sx={{ height:"4em", width:"6em" }}></Card>
                <Card variant="outlined" sx={{ height:"4em", width:"6em" }}></Card>
                <Card variant="outlined" sx={{ height:"4em", width:"7em" }}>
                    <CardContent>
                        {!player ? 
                        <Button variant="contained">Start</Button> 
                        :
                        <Button variant="contained">Reset</Button> 
                        }
                    </CardContent>
                </Card>
            </Box>
    )

}

export default GameInfo;