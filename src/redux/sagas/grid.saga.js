import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* getRand(action) {
    try {
        const response = yield axios.get('/api/grid/random');

        yield put({ type: 'SET_RANDOM_GEN', payload: response.data })
    }
    catch(error) {
        console.log('Unable to get from /grid/random');
    }
}


function* gridSaga() {
    yield takeLatest('GET_RANDOM_GEN', getRand);
}

export default gridSaga;