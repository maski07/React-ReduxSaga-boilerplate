import { call } from "redux-saga/effects";
import { IHandler } from "../../../Store/Main";
import { IState } from "../../../Types/State";
import { actionTypes } from "./Actions";

export function* todoListPageSaga(action: IHandler) {
    switch (action.type) {
        // 初期表示処理を実行
        case actionTypes.InitialDisplay: {
            yield call(outputSaga, 'initialDisplay');
            break;
        } default: {
            yield call(outputSaga, 'default');
            break;
        }
    }
}

export function todoListPageReducer(state: IState, action: any): IState {
    switch (action.type) {
        // 初期表示処理を実行
        case actionTypes.InitialDisplay: {
            return state;
        }
        /** todoの入力 */
        case actionTypes.InputMemo: {
            outputReducer(action.type);
            return state;
        }
        default: {
            return state;
        }
    }
}

const outputReducer = function (test: string) {
    console.log(test, 'reducer');
};
const outputSaga = function* (test: string) {
    yield console.log(test, 'saga');
};