import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function rGen() {
    return Math.ceil(Math.random() * 5) + 1;
}

function* getRand(action) {
    try {
        const i = rGen();
        yield put({ type: 'SET_RANDOM_GEN', payload: i })
    }
    catch (error) {
        console.log('Unable to get RNG');
    }
}

function* setColumn(action) {
    try {
        let { player, roll, column, newDisplay } = action.payload;
        let i = 0;

        for (; newDisplay[column][i] != 0 && i < 3; ++i); // find empty spot
        if (i >= 3) throw (new Error());
        newDisplay[column][i] = roll;

        if(player) {
            yield put({ type: 'SET_PLAYER_TWO_GRID', payload: newDisplay })
            yield put({ type: 'TAKE_TURN', payload: 0 })
        }
        else {
            yield put({ type: 'SET_PLAYER_ONE_GRID', payload: newDisplay })
            yield put({ type: 'TAKE_TURN', payload: 1 })
        }
    }
    catch (error) {
        console.log('Unable to set score');
    }
}

function* takeTurn(action) {
    try {
        console.log('Transitioning turns...');
        yield put({ type: 'NEXT_TURN', payload: action.payload });
        yield put({ type: 'GET_RANDOM_GEN' })
    }
    catch (e) {
        console.log('Unable to transition turn. Something went horribly wrong!');
    }
}

function* startGame() {
    try {
        console.log('Starting a new game. Have fun! Choosing starting player.... ');
        yield put({ type: 'NEXT_TURN', payload: Math.round(Math.random())});
        yield put({ type: 'GET_RANDOM_GEN' });
    }
    catch (e) {
        console.log('Unable to start game. Something went horribly wrong!');
    }
}

function* gridSaga() {
    yield takeLatest('GET_RANDOM_GEN', getRand);
    yield takeLatest('SAVE_SCORE', setColumn);
    yield takeLatest('TAKE_TURN', takeTurn);
    yield takeLatest('START_GAME', startGame);
}

export default gridSaga;