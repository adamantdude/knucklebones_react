import { combineReducers } from "redux";

const random = (state = 0, action) => {
    if(action.type == "SET_RANDOM_GEN") {
        return action.payload;
    }
    return state;
}

const p1Grid = (state = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], action) => {
    if (action.type == "SET_PLAYER_ONE_GRID") {
        return action.payload; // should be updated array from server
    }
    return state;
}

const p2Grid = (state = [[0, 0, 0], [0, 0, 0], [0, 0, 0]], action) => {
    if (action.type == "SET_PLAYER_TWO_GRID") {
        return action.payload; // same as 1
    }
    return state;
}

const turn = (state = -1, action) => {
    if(action.type == "NEXT_TURN") {
        return action.payload;
    }
    return state;
}

export default combineReducers({
    random,
    p1Grid,
    p2Grid,
    turn
});