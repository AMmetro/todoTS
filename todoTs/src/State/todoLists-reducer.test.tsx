// https://www.youtube.com/watch?v=OPzKXo8CbXM&list=PLbLBXDhswD1dOrCHdU8OtGvARL02N9zFj&index=10
// 2-30

import {changeTodoListFilterActionType, todoListReducer} from './todoLists-reducer';
import {v1} from 'uuid';
import {todoListType, FilterValuesType} from '../App';

test('correct todolist should be removed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<todoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todoListReducer(startState, { type: 'REMOVE-TODOLIST', todoListId: todolistId1})
    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});


test('correct todolist should be added', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newTodolistTitle:string ="what to do";

    const startState: Array<todoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todoListReducer(startState, { type: "ADD-TODOLIST", title: newTodolistTitle})
    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodolistTitle);
});

test('change todolist title', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let newTodolistTitle:string ="what to do";

    const startState: Array<todoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todoListReducer(startState, {type:"CHANGE-TODOLIST-TITLE" as const, title: newTodolistTitle,todoListId:todolistId1})
    // console.log(endState)
    expect(endState.length).toBe(2);
    expect(endState[0].title).toBe(newTodolistTitle);
});


test('correct filter of todolist should be changed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    let newFilter: FilterValuesType = "completed";

    const startState: Array<todoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const action: changeTodoListFilterActionType = {
        type: 'CHANGE-TODOLIST-FILTER',
        todoListId: todolistId2,
        filter: newFilter
    };

    const endState = todoListReducer(startState, action);
    // const endState = todoListReducer(startState, {type:'CHANGE-TODOLIST-FILTER', todoListId:todolistId2, filter:newFilter});

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});







