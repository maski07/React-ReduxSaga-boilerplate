import { initialTodoList, ITodoListCard } from "../Components/Organisms/ToDoListCard/TodoListType";

/**
 * State is read-only
 */
export interface IState {
    readonly count: number,
    readonly todoListCard: ITodoListCard,
}

export const initialState: IState = {
    count: 1,
    todoListCard: initialTodoList,
}