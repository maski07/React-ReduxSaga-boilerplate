import { ITodoList } from "../../Molecules/ToDoList/Type";

export interface ITodoListCard {
    listTitle: string;
    todoList: ITodoList[];
}
/** todo: 初期値をあとで直す */
export const initialTodoList: ITodoListCard = {
    listTitle: 'タイトル初期値',
    todoList: [{ item: 'item', count: 1 }]
}
