import {store}  from '../index'

interface addUserType {
    id:  number,
    name: string,
    surname: string,
    age: number
}


export const addUser = ({name, surname, age, id}:addUserType) =>  {
    const state = store.getState();
    console.log(state)
    const ageIncrement = 1; // change this value to increment the age by a different amount
    const prevAge = state.length > 0 ? state[state.length - 1].age : 0;
    const newAge = prevAge + ageIncrement;
    return  {
        type: "ADD_USER",
        userData: {
            name,
            surname,
            age: newAge ,
            id
        }
    }
}

