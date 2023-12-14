import { Button, Divider } from "@mui/material";
import GameGrid from "../GameGrid/GameGrid";
import GameInfo from "../GameInfo/GameInfo";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


function Game() {

    const dispatch = useDispatch();

    // Game Logic Should Go Here

    const grid1 = useSelector(store => store.grid.p1Grid);
    const grid2 = useSelector(store => store.grid.p2Grid);


    const chooseColumn = (column) => {
        /*
            When a player clicks a buttom from the GameAction component, {column} determines which button left-to-right
                that was clicked. The randomly rolled die from server side is then placed on the column and updated in redux
        */
       console.log("The column clicked is: ", column);
    }



    //

    return (
        <div>
            <GameGrid rows={[3, 2, 1]} player={0} cCo={chooseColumn}/> {/*  Player 1 Grid  */}
            <GameInfo player={0}/> {/*  Player 1 Info */}
            <Divider />
            <GameInfo player={1}/> {/*  Player 2 Info */}
            <GameGrid rows={[1, 2, 3]} player={1} cCo={chooseColumn}/> {/*  Player 2 Grid  */}
        </div>
    )
}

export default Game;