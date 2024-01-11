import { Button, Divider } from "@mui/material";
import GameGrid from "../GameGrid/GameGrid";
import GameInfo from "../GameInfo/GameInfo";
import { useDispatch } from "react-redux";


function Game() {

    return (
        <div>
            <GameGrid rows={[3, 2, 1]} player={0}/> {/*  Player 1 Grid  */}
            <GameInfo player={0}/> {/*  Player 1 Info */}
            <Divider />
            <GameInfo player={1}/> {/*  Player 2 Info */}
            <GameGrid rows={[1, 2, 3]} player={1}/> {/*  Player 2 Grid  */}
        </div>
    )
}

export default Game;