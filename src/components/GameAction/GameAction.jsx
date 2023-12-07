import { Box, Button } from "@mui/material";

function GameAction(){

    return (
        <Box sx={{ display:'flex', justifyContent:'center' }}>
            <Button variant="contained" sx={{ p:'10px', m:'1px' }}></Button>
            <Button variant="contained" sx={{ p:'10px', m:'1px' }}></Button>
            <Button variant="contained" sx={{ p:'10px', m:'1px' }}></Button>
        </Box>
    )

}

export default GameAction;