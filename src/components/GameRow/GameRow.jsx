import { Box, Card, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function GameRow({ row, player, cCo }) {

    const display = player ? useSelector(store => store.grid.p2Grid) : useSelector(store => store.grid.p1Grid);


    return (
        <Box sx={{ display: 'flex' }}>
            <Card variant="outlined" sx={{ height: '4em', width: '4em' }} onClick={() => cCo(0)}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography>{display[0][row-1]}</Typography>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{ height: '4em', width: '4em' }} onClick={() => cCo(1)}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography>{display[1][row-1]}</Typography>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{ height: '4em', width: '4em' }} onClick={() => cCo(2)}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography>{display[2][row-1]}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default GameRow;