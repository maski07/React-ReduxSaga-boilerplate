import { Checkbox, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from 'react';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
const ToDoList = (): JSX.Element => {
    const value = 1;
    return (
        <ListItem key={''} role={undefined} dense button onClick={() => console.log}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={true}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': 'labelId' }}
                />
            </ListItemIcon>
            <ListItemText id={'labelId'} primary={`Line item ${value + 1}`} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default ToDoList;