import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {EditableSpan} from './EditableSpan';
import {Button, Checkbox, IconButton} from '@material-ui/core';
import {Delete} from '@material-ui/icons';


export const Task =React.memo( (props:any)=> {

    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
         props.changeTaskStatus(e.currentTarget.checked);

    }

    const onTitleChangeHandler = (newValue: string) => {
        props.onTitleChangeHandler(newValue);
    }

    const onClickHandler = () => props.removeTask()


    return <div>

        <Checkbox
            checked={props.checked}
            color="primary"
            onChange={changeTaskStatus}
        />
        <EditableSpan
            value={props.title}
            onChange={onTitleChangeHandler}
        />
        <IconButton onClick={onClickHandler}>
            <Delete />
        </IconButton>


    </div>
} )


