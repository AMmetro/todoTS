
import {v1} from "uuid";
import {todoListType, FilterValuesType} from "../App";

export type removeTodoListActionType = {
    type: "REMOVE-TODOLIST"
    todoListId: string
}

export type addTodoListActionType = {
    type: "ADD-TODOLIST"
    title: string
    }

export type changeTodoListTitleActionType = {
    type: "CHANGE-TODOLIST-TITLE"
    title:string
    todoListId: string
    }

export type changeTodoListFilterActionType = {
    type: "CHANGE-TODOLIST-FILTER"
    todoListId: string
    filter: FilterValuesType
    }


type ActionType= changeTodoListFilterActionType | changeTodoListTitleActionType |
    addTodoListActionType | removeTodoListActionType


export const todoListReducer = (state:Array<todoListType>, action:ActionType)=> {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return state.filter(todoLists => todoLists.id !== action.todoListId)

        case "ADD-TODOLIST":
            const todoListId = v1();
            const newTodoListItem: todoListType = {id: todoListId, title: action.title, filter: "all"};
            return [...state, newTodoListItem]

        case "CHANGE-TODOLIST-TITLE":
            const Todo = state.find(td => td.id == action.todoListId)  // возвращает ссылку на то что нашел первым...
            if (Todo) {
                Todo.title = action.title
                return [...state]
            }
            return state


        case "CHANGE-TODOLIST-FILTER": {
            const Todo = state.find(td => td.id == action.todoListId)  // возвращает ссылку на то что нашел первым...
            if (Todo) {
                Todo.filter = action.filter
                return [...state]
            }
        }

             default:
                 throw new Error("I  dont understand this type")
    }
}


//--------------------------------------------------------------------------

export const RemoveTodoListAC= (todolistId:string):removeTodoListActionType => {
    return {
        type: "REMOVE-TODOLIST",
        todoListId: todolistId
    }
}


