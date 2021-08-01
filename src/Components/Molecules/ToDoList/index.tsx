import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import BaseCheckbox from "../../Atoms/BaseCheckbox";
import { useEffect, useState } from "react";
import { actions } from "./Actions";
import { GetTodoList } from "../../../API/Api";
import { ITodoList } from "./Type";
import { handler } from "../../../Store/Main";

export interface TodoListProps {
    listItemClickAction: string,
    todoList?: ITodoList,
}
const ToDoList = (
    props: TodoListProps
): JSX.Element => {
    const { listItemClickAction, todoList } = props;
    const [count, setState] = useState(0);
    const [todoListState, SetTodoList] = useState({});

    // 第2引数が空の配列：マウント・アンマウント時のみ第1引数を実行
    // 第2引数が値の配列：最初のマウント時と与えられた値に変化があった場合のみ第1引数を実行
    useEffect(() => {
        const todoList = GetTodoList().then(val => val);
        SetTodoList(todoList);
    }, []);
    console.info({ aa: 'todolist', todoListState });

    return (
        <>
            <ListItem
                key={todoList?.item}
                role={undefined}
                dense
                button
                onClick={() => handler(listItemClickAction)}
            >
                <ListItemIcon>
                    <BaseCheckbox
                        edge="start"
                        checked={true}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': 'labelId' }}
                    />
                </ListItemIcon>
                <ListItemText id={'labelId'} primary={`${todoList?.item} ${count}`} />
                <ListItemSecondaryAction>
                    <IconButton
                        edge="end"
                        aria-label="comments"
                        onClick={() => {
                            setState(prev => prev + 1);
                        }}
                    >
                        <CommentIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem >
        </>
    );
};

ToDoList.defaultProps = {
    listItemClickAction: actions.inputMemo,
} as TodoListProps;

export default ToDoList;

