import ToDoList from "../Molecules/ToDoList";


const SamplePage = (): JSX.Element => {
    console.log('test');
    // useEffect(() => console.log,);
    return (
        <div>
            {/* TODO: forでぐるぐる回す */}
            <ToDoList />
            <ToDoList />
            <ToDoList />
            <ToDoList />
            <ToDoList />
            <ToDoList />
        </div>
    );
};

export default SamplePage;