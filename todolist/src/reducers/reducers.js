import { ADD_TODO } from '../actions/addTodo';

const stateDefault = {
    todolist: []
}
function rootReducers(state = stateDefault, actions){
    switch(actions.type){
        case ADD_TODO:
            return 'abc';
        default:
            return 'default';
    }
}

export default rootReducers;