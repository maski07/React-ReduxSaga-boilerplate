import { put, takeEvery } from 'redux-saga/effects'
import { ITodoListCard } from '../Components/Organisms/ToDoListCard/TodoListType';

export function* helloSaga() {
    yield console.log('Hello Sagas!');
}

const delay = (ms: number): Promise<void> => new Promise(res => setTimeout(res, ms))

export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

/** スタブ */
export const GetTodoList = async (): Promise<ITodoListCard> => {
    // Handler.Get(endpoints.todoList);
    return {
        listTitle: 'ルール',
        todoList: [
            {
                item: '箇条書きでまとめる',
                count: 1,
            },
            {
                item: '予約は土日に済ます',
                count: 1,
            }
        ]
    };
};
