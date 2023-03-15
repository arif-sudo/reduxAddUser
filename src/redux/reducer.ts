
interface initalStateType {
    name: string,
    surname: string,
    age: number,
    id: number
}

const initalState:initalStateType[] = [{name: "Umut", surname: "Can", age: 20, id: 1}]

export const userReducer = (state = initalState , action:any) => {
    switch(action.type){
        case "ADD_USER":
            return [...state, action.userData]
        default:
            return state
    }
}
