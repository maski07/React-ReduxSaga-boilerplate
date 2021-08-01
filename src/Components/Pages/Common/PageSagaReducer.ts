import { call } from "redux-saga/effects";
import { IHandler } from "../../../Store/Main";
import { IState } from "../../../Types/State";
import { todoListPageReducer, todoListPageSaga } from "../ToDoListPage/SagaReducer";

export function* PageSaga(action: IHandler) {
    if (action.type.startsWith('pages_todoList')) yield call(todoListPageSaga, action);
}

export function PageReducer(state: IState, action: any): IState {
    if (action.type.startsWith('pages_toDoList')) return todoListPageReducer(state, action);

    return state;
}