import { call } from "redux-saga/effects";
import { IHandler } from "../../../Store/Main";
import { initialState, IState } from "../../../Types/State";
import { todoListPrefix } from "../ToDoList/Actions";
import { toDoListReducer, todoListSaga } from "../ToDoList/SagaReducer";

export function* moleculesSaga(action: IHandler) {
    if (action.type.startsWith(todoListPrefix)) yield call(todoListSaga, action);
}

export function moleculesReducer(state: IState = initialState, action: IHandler): IState {

    if (action.type.startsWith(todoListPrefix)) return toDoListReducer(state, action);

    return state;
}