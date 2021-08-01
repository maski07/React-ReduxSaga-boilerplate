import { useEffect } from "react";
import ToDoList from "../../Molecules/ToDoList";
import { ITodoListCard } from "./TodoListType";

export interface TodoListProps {
    todoListCard: ITodoListCard;
    action: any;
}

const ToDoListCard = (
    props: TodoListProps
): JSX.Element => {
    const { todoListCard, action } = props;

    // 初期情報取得
    useEffect(() => {
        console.info('actionのdipatch前:todolistCard');
        console.info(action);
        // action(actionTypes.getTodoListCard);
    });

    return (
        <>
            <div>{todoListCard.listTitle}</div>
            {
                todoListCard.todoList.map((value, i) =>
                    <ToDoList key={i} todoList={value} />
                )
            }
        </>
    );
};

export default ToDoListCard;
