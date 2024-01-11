import { Box, Card, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function GameRow({ row, player }) {
    const dispatch = useDispatch();
    // grab the random roll from server
    const roll = useSelector(store => store.grid.random);
    // choose correct grid to display according to component prop 'player'
    const display = player ? useSelector(store => store.grid.p2Grid) : useSelector(store => store.grid.p1Grid);
    const turn = useSelector(store => store.grid.turn);
    const diceArr = [ '', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅' ];

    const chooseColumn = (column) => {
        /*
            When a player clicks the GameRow component, {column} determines which column left-to-right
                that was clicked. The randomly rolled die from server side is then placed on the column and updated in redux
        */
        if (turn == player) {
            console.log("The column clicked is: ", column);

            const newDisplay = display.slice(); // remove pass by ref to reducer array while still using same data

            dispatch({ type: 'SAVE_SCORE', payload: { player, roll, column, newDisplay } })
        }
        else {
            console.log('Player attempted move when not their turn!');
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Card variant="outlined" sx={{ height: '4em', width: '4em', m:'2%' }} onClick={() => chooseColumn(0)}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '26px' }}>{diceArr[display[0][row - 1]]}</Typography>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{ height: '4em', width: '4em', m:'2%' }} onClick={() => chooseColumn(1)}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '26px' }}>{diceArr[display[1][row - 1]]}</Typography>
                </CardContent>
            </Card>
            <Card variant="outlined" sx={{ height: '4em', width: '4em', m:'2%' }} onClick={() => chooseColumn(2)}>
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '26px' }}>{diceArr[display[2][row - 1]]}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default GameRow;