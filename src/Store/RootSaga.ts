import { call, select, take } from "redux-saga/effects";
import { IState } from "../Types/State";
import { IHandler } from "./Main";
import { saga } from "./Saga";

const rootSaga = function* () {
    yield call(middle);
};

const middle = function* () {
    while (true) {
        const action: IHandler = yield take('*');
        const state: IState = yield select();
        try {
            yield call(saga, state, action);
        } catch (error) {
            console.error(error, action);
        }
    }
}

export default rootSaga;