import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import GameRow from "../GameRow/GameRow";

function GameGrid({ rows, player }) {

    return (
        <Box sx={{ display: 'flex', flexDirection:'column', alignItems:'center', mt: '1%', mb: '1%' }}>
            <GameRow row={rows[0]} player={player}/>
            <GameRow row={rows[1]} player={player}/>
            <GameRow row={rows[2]} player={player}/>
        </Box>
    )
}

export default GameGrid;