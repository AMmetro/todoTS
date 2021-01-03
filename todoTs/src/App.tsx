import React, {useState} from 'react';
import './App.css';
import {Todolist, TaskType} from './Todolist';
import AddItemsForms from "./AddItemsForms";
import Material from "./Material";
import SaveIcon from "@material-ui/icons/Save";
import {v1} from "uuid";
import {AppBar, Toolbar, IconButton, Typography, Button, Container, Grid, Paper} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
// import {Sum} from "./tests/Tests"

export type FilterValuesType = "all" | "active" | "completed";
export type todoListType = { id: any, title: string, filter: FilterValuesType };
type TaskStateType = { [key: string]: Array<TaskType> };

function App() {

    const todoListId1 = v1();
    const todoListId2 = v1();

    const [todoLists, setTodoLists] = useState<Array<todoListType>>([
        {id: todoListId1, title: "what to learn", filter: "all"},
        {id: todoListId2, title: "what to buy", filter: "all"}
    ]);

    let [tasks, setTasks] = useState<TaskStateType>({
        [todoListId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
        ],
        [todoListId2]: [
            {id: v1(), title: "Bear", isDone: true},
            {id: v1(), title: "Fish", isDone: true},
        ],
    });


    const removeTodoList = (todoListId: string) => {
        const newTodoList = todoLists.filter(todoLists => todoLists.id != todoListId)
        setTodoLists(newTodoList)
        const dellTasksList = tasks[todoListId]
        delete tasks[todoListId]
    }

    function removeTask(taskId: string, todoListId: string) {
        let todoTask = tasks[todoListId];
        let filteredTasks = todoTask.filter(t => t.id != taskId);
        setTasks({...tasks, [todoListId]: filteredTasks});
        // viktor varik
        // let tasks[todoListId]=tasks[todoListId].filter(t => t.id != taskId);
        //     setTasks({...tasks});
    }

    function changeFilter(value: FilterValuesType, todoListId: string) {
        const todoList = todoLists.find(list => list.id == todoListId)
        if (todoList) {
            todoList.filter = value;
            setTodoLists([...todoLists]);
        }
    }

    function addTask(title: string, todoListId: string) {
        const newTask: any = {id: v1(), title: title, isDone: false}
        tasks[todoListId] = [newTask, ...tasks[todoListId]];
        setTasks({...tasks});
    }

    function addTodoList(title: string) {
        const todoListId = v1();
        const newTodoListItem: todoListType = {id: todoListId, title: title, filter: "all"};
        tasks[todoListId] = [];
        setTodoLists([...todoLists, newTodoListItem])
    }

    function changeStatus(taskId: string, checked: boolean, todoListId: string) {

        const Tsk = tasks[todoListId].find(t => t.id == taskId)  // возвращает ссылку на то что нашел первым...
        if (Tsk) {
            Tsk.isDone = checked
            setTasks({...tasks})                        // ... просто перерисовка страницы

        }
    }

    function changeTaskTitle(taskId: string, newTitle: string, todoListId: string) {

        const Tsk = tasks[todoListId].find(t => t.id == taskId)  // возвращает ссылку на то что нашел первым...
        if (Tsk) {
            Tsk.title = newTitle
            setTasks({...tasks})                        // ... просто перерисовка страницы

        }
    }

    function changeTodoListTitle(newTitle: string, todoListId: string) {

        const Todo = todoLists.find(t => t.id == todoListId)  // возвращает ссылку на то что нашел первым...
        if (Todo) {
            Todo.title = newTitle
            setTodoLists([...todoLists])                        // ... просто перерисовка страницы
        }
    }


    return (
        <div className="App">

            {/*<Sum a={5}*/}
            {/*     b={10}/>*/}


            {/*<Button color="secondary"*/}
            {/*        endIcon={<SaveIcon />}*/}
            {/*        variant="contained"*/}
            {/*        style={{fontSize: 15}}>*/}
            {/*    save*/}
            {/* </Button>*/}

            {/*header block*/}
            <AppBar position={"static"}>
                <Toolbar>
                    <IconButton edge={"start"} color={"inherit"} aria-label={"menu"}>
                        <Menu/>
                    </IconButton>
                    <Typography variant={"h6"}>
                        News
                    </Typography>
                    <Button color={"inherit"}>Login</Button>
                </Toolbar>
            </AppBar>

            <Container fixed={true}>

                <Grid container={true} style={{padding:"30px"}}>
                    <AddItemsForms addItems={addTodoList}/>
                </Grid>
                <Grid container={true} spacing={9}>
                    {todoLists.map(td => {

                            let tasksForTodolist = tasks[td.id];        // case for filter="all", work by default

                            if (td.filter === "active") {
                                tasksForTodolist = tasks[td.id].filter(t => t.isDone === false);
                            }
                            if (td.filter === "completed") {
                                tasksForTodolist = tasks[td.id].filter(t => t.isDone === true);
                            }

                            return (

                                <Grid item>
                                    <Paper elevation={10}
                                           // variant="outlined" square
                                           style={{padding: "15px", borderRadius: "25px"}}>
                                        <Todolist
                                        key={td.id}
                                        todoListId={td.id}
                                        title={td.title}
                                        tasks={tasksForTodolist}
                                        removeTask={removeTask}
                                        removeTodoList={removeTodoList}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeStatus={changeStatus}
                                        changeTaskTitle={changeTaskTitle}
                                        changeTodoListTitle={changeTodoListTitle}
                                        filter={td.filter}
                                        />
                                    </Paper>
                                </Grid>

                            )
                        }
                    )}
                </Grid>
            </Container>

             <Material/>

        </div>
    );
}





export default App;

