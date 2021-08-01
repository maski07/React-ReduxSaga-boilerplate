import { call } from "redux-saga/effects";
import { IHandler } from "../../../Store/Main";
import { IState } from "../../../Types/State";
import { actionTypes } from "../../Pages/ToDoListPage/Actions";

export function* todoListSaga(action: IHandler) {
    switch (action.type) {
        /**  初期表示処理 */
        case actionTypes.InitialDisplay: {
            break;
        }
        case actionTypes.InputMemo: {
            break;
        }
        default: {
            yield call(outputSaga, 'default');
            break;
        }
    }
}

export function toDoListReducer(state: IState, action: IHandler): IState {
    outputReducer(action.type);
    switch (action.type) {
        /**  初期表示処理 */
        case actionTypes.InitialDisplay: {
            return state;
        }
        default: {
            return state;
        }
    }
}

function outputReducer(name: string) {
    console.log('todoListReducer', name);
}

function* outputSaga(name: string) {
    yield console.log('todoListSaga', name);
}