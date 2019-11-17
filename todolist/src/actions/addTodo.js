export const ADD_TODO = 'ADD_TODO';

export function addTodo(title){
    return {action: ADD_TODO, title: title};
}