import { Divider } from "@mui/material";
import GameGrid from "../GameGrid/GameGrid";
import GameInfo from "../GameInfo/GameInfo";


function Game() {




    return (
        <div>
            <GameGrid /> {/*  Player 1 Grid  */}
            <GameInfo /> {/*  Player 1 Info */}
            <Divider />
            <GameInfo /> {/*  Player 2 Info */}
            <GameGrid /> {/*  Player 2 Grid  */}
        </div>
    )
}

export default Game;