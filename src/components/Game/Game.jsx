import { Button, Divider } from "@mui/material";
import GameGrid from "../GameGrid/GameGrid";
import GameInfo from "../GameInfo/GameInfo";
import GameAction from "../GameAction/GameAction";


function Game() {




    return (
        <div>
            <GameGrid player='0'/> {/*  Player 1 Grid  */}
            <GameAction />
            <GameInfo /> {/*  Player 1 Info */}
            <Divider />
            <GameInfo /> {/*  Player 2 Info */}
            <GameAction />
            <GameGrid player='1'/> {/*  Player 2 Grid  */}
        </div>
    )
}

export default Game;