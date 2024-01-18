import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function GameInfo({ player }) {

    const dispatch = useDispatch();
    const turn = useSelector(store => store.grid.turn);
    const roll = useSelector(store => store.grid.random);
    const diceArr = ['', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

    const gameStart = () => {
        dispatch({ type: 'START_GAME' });
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "5px", mb: "5px" }}>
            <Card variant="outlined" sx={{ height: "4em", width: "7em" }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    {!player ?
                        <Typography>P1</Typography>
                        :
                        <Typography>P2</Typography>
                    }
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{ height: "4em", width: "6em" }}>
                <CardContent sx={{ textAlign: 'center' }}>
                    {!player == turn ?
                        null
                        :
                        <Typography sx={{ fontSize: '26px' }}>{diceArr[roll]}</Typography>
                    }
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{ height: "4em", width: "6em" }}>
                <CardContent sx={{ textAlign:'center' }}>
                    
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{ height: "4em", width: "7em" }}>
                <CardContent>
                    {!player ?
                        <Button variant="contained" onClick={gameStart}>Start</Button>
                        :
                        <Button variant="contained">Reset</Button>
                    }
                </CardContent>
            </Card>
        </Box>
    )

}

export default GameInfo;