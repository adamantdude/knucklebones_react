import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import GameRow from "../GameRow/GameRow";

function GameGrid({ player }) {

    const sendConsole = () => {
        console.log('wassap', player);
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '1%', mb: '1%' }}>
            <GameRow/>
            <GameRow/>
            <GameRow/>
        </Box>
    )
}

export default GameGrid;