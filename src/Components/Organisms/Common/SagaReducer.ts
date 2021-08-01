import { call } from "redux-saga/effects";
import { IHandler } from "../../../Store/Main";
import { initialState, IState } from "../../../Types/State";
import { todoListCardPrefix } from "../ToDoListCard/Actions";
import { toDoListCardReducer, toDoListCardSaga } from "../ToDoListCard/SagaReducer";
import { organismsPrefix } from "./Common";

export function* organismsSaga(action: IHandler) {
    if (action.type.startsWith(organismsPrefix + todoListCardPrefix))
        yield call(toDoListCardSaga, action);
}

export function organismsReducer(state: IState = initialState, action: IHandler): IState {
    if (action.type.startsWith(organismsPrefix)) {
        // todo: 本当はupdateInだけどとりあえず。
        toDoListCardReducer(state.todoListCard, action);
        return state;
    }
    return state;
}