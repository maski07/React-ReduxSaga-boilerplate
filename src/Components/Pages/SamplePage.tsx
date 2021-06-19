// import { useEffect } from "react-transition-group/node_modules/@types/react";
import ToDoList from "../Molecules/ToDoList";


const SamplePage = (): JSX.Element => {
    console.log('test');
    // useEffect(async () => Get('/lists'));
    const TodoListState = {
        list: 'test',
        count: 1,
    } as const;
    console.log(TodoListState);
    return (
        <div>
            {/* TODO: forでぐるぐる回す */}
            {/* <ToDoList {...TodoListState} /> */}
            <ToDoList list={TodoListState.list} count={TodoListState.count} />
            <ToDoList list={TodoListState.list} count={TodoListState.count} />
            <ToDoList list={TodoListState.list} count={TodoListState.count} />
            <ToDoList list={TodoListState.list} count={TodoListState.count} />
            <ToDoList list={TodoListState.list} count={TodoListState.count} />
        </div>
    );
};

export default SamplePage;