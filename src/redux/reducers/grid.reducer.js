import { combineReducers } from "redux";

/*
    state = [
        0,0,0,
        0,0,0,
        0,0,0,
    ]
    action.payload = id : range of 0-8
    
*/

const p1GridReducer = (state = [0,0,0,0,0,0,0,0,0], action) => {
    if(action.type == "PLAYER_ONE_GRID") {
        
    }
    return state;
}

const p2GridReducer = (state = [0,0,0,0,0,0,0,0,0], action) => {
    if(action.type == "PLAYER_TWO_GRID") {
        
    }
    return state;
}

export default combineReducers({
    p1GridReducer,
    p2GridReducer
});