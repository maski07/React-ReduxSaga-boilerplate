import { IState } from "../../../Types/State";
import ToDoListCard from "../../Organisms/ToDoListCard";

interface props {
    state: IState,
    action: any,
}

const TodoListPage = (props: props) => {
    const { state, action } = { ...props };
    return (
        <>
            {/* todo ヘッダ・フッタはもう一個上の階層に入れる */}
            <header>ヘッダー</header>
            <ToDoListCard
                todoListCard={state.todoListCard}
                action={action}
            />
            <footer>フッター</footer>
        </>
    );
};

export default TodoListPage;