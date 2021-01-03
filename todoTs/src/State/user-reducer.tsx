// export type StateType={
//     name:string | undefined
//     age:number
//     childrenCount:number
// }
//
// type ActionType={
//     type:string      //сериализируемая сущность
//     newName?:string
//     [key:string]:any //необязательное поле
// }
//
//
// export const userReducer = (state:StateType,action:ActionType) => {
//
//     switch (action.type) {
//         case 'INCREMENT-AGE':
//             state.age = state.age + 1;
//             return state;
//         case 'INCREMENT-CHILDREN-COUNT':
//             state.childrenCount = state.childrenCount + 1;
//             return state;
//         case 'CHANGE-NAME':
//             const newState:StateType={...state, name:action.newName}
//             // newState.name = action.newName;
//             return newState;
//
//
//         default:
//             throw new Error("I don't understand this type")
//     }
//
// }
