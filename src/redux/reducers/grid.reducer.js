import { combineReducers } from "redux";

/*
    state = [
        0,0,0,
        0,0,0,
        0,0,0,
    ]
    action.payload = id : range of 0-8

    array placement is (column)*(row) - 1
        i.e. column 3, row 2 = 3*2 = 6-1 = 5
        e.g. state = [0, 0, 0, 0, x, 0, 0, 0, 0] where x is received roll
    
*/
const random = (state = 0, action) => {
    if(action.type == "SET_RANDOM_GEN") {
        return action.payload;
    }
    return state;
}

const p1Grid = (state = [[1, 2, 0], [0, 0, 0], [0, 0, 9]], action) => {
    if (action.type == "SET_PLAYER_ONE_GRID") {
        return action.payload; // should be updated array from server
    }
    return state;
}

const p2Grid = (state = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], action) => {
    if (action.type == "SET_PLAYER_TWO_GRID") {
        return action.payload; // same as 1
    }
    return state;
}

export default combineReducers({
    random,
    p1Grid,
    p2Grid
});