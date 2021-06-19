import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
// import React, { useState } from 'react';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import BaseCheckbox from "../Atoms/BaseCheckbox";

export interface TodoListProps {
    list: string,
    count: number
}

const ToDoList = (
    props: TodoListProps
): JSX.Element => {
    const value = 1;
    // const [count, setState] = useState({ list: props.list, count: props.count } as TodoListProps);
    return (
        <ListItem key={''} role={undefined} dense button onClick={() => console.log}>
            <ListItemIcon>
                <BaseCheckbox
                    edge="start"
                    checked={true}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': 'labelId' }}
                />
            </ListItemIcon>
            <ListItemText id={'labelId'} primary={`Line item ${value + 1}`} />
            {/* <div>{count}</div> */}
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                </IconButton>
                {/* <button onClick={() => {
                    setState(prev => prev);
                }}>+</button> */}
            </ListItemSecondaryAction>
        </ListItem >
    );
};

export default ToDoList;