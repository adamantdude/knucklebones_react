import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import GameRow from "../GameRow/GameRow";

function GameGrid() {

    return (
        <Box sx={{ display: 'flex', flexDirection:'column', alignItems:'center', mt: '1%', mb: '1%' }}>
            <GameRow/>
            <GameRow/>
            <GameRow/>
        </Box>
    )
}

export default GameGrid;