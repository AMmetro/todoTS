import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import AddItemsForms from "./AddItemsForms";
import EditableSpan from "./EditableSpan";
import {Button, ButtonGroup, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todoListId: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todoListId: string) => void
    removeTodoList: (todoListId: string) => void
    changeFilter: (value: FilterValuesType, todoListId: string) => void
    addTask: (title: string, todoListId: string) => void
    changeStatus: (taskId: string, checked: boolean, todoListId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todoListId: string) => void
    changeTodoListTitle: (newTitle: string, todoListId: string) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    const tasks = props.tasks.map(t => {
        const getNewTitle = (newTitle: string) => {
            props.changeTaskTitle(t.id, newTitle, props.todoListId)
        }

        const changeStatus=(event:ChangeEvent<HTMLInputElement>)=>{
            props.changeStatus(t.id, event.currentTarget.checked, props.todoListId)
        }

        return (
            <li key={t.id} className={t.isDone ? "is-done" : ""}>
                <Checkbox
                 checked={t.isDone}
                 onChange={changeStatus}
                 color={"primary"}
                  />

                {/*<input type="checkbox"*/}
                {/*       checked={t.isDone}*/}
                {/*       onClick={(e) => props.changeStatus(t.id, e.currentTarget.checked, props.todoListId)}*/}
                {/*/>*/}
                <EditableSpan title={t.title}
                              getNewTitle={getNewTitle}/>
                <IconButton onClick={() => {
                    props.removeTask(t.id, props.todoListId)
                }}><Delete/></IconButton>
                {/*<button onClick={ () => { props.removeTask(t.id,props.todoListId)} }>x</button>*/}
            </li>
        )
    })

    const changeTodoListTitle = (newTitle: string) => {
        props.changeTodoListTitle(newTitle, props.todoListId)
    }

    const addTask = (newTitle: string) => {
        props.addTask(newTitle, props.todoListId)
    }

    return (
        <div>
            <EditableSpan title={props.title}
                          getNewTitle={changeTodoListTitle}/>

            <IconButton onClick={() => {props.removeTodoList(props.todoListId)}}>
                <Delete/></IconButton>
            {/*<button onClick={()=>{props.removeTodoList(props.todoListId)}}>x</button>*/}

            <AddItemsForms addItems={addTask}/>

            <ul style={{listStyle:"none"}}>
                {tasks}
            </ul>


            <div style={{textAlign:"center"}}>
                <ButtonGroup size={"small"} color={"primary"}>
                <Button
                    variant={(props.filter == "all") ? "contained" : "outlined"}
                    // className={(props.filter=="all") ? "active-filter" : ""}
                    onClick={() => {
                        props.changeFilter("all", props.todoListId)
                    }}>
                    All </Button>
                <Button
                    variant={(props.filter == "active") ? "contained" : "outlined"}
                    // className={(props.filter=="active") ? "active-filter" : ""}
                    onClick={() => {
                        props.changeFilter("active", props.todoListId)
                    }}>
                    Active </Button>
                <Button
                    variant={(props.filter == "completed") ? "contained" : "outlined"}
                    // className={(props.filter=="completed") ? "active-filter" : ""}
                    onClick={() => {
                        props.changeFilter("completed", props.todoListId)
                    }}>
                    Completed </Button>
            </ButtonGroup>
            </div>

        </div>)
}
