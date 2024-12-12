import {createSlice, nanoid} from '@reduxjs/toolkit';

// nano id  only creates unique Id's

const initialState = {
    //todos is a state
    todos: [{id: 1, text: "Hello World"}]

    //can be more properties here like auth tokken etc
}



// Now create Slicer. Slicer is a bigger version of Reducer.

//Slicers have name. Make sure you use and remmber the name because this will be used in redux toolkit extension of Chrome
export const todosSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //[NOTE]In context API we were only decalring the functionality but in reducers we also define it 
        // state and action access will always be there
        //State will be always give access to the instant state (may be initial and may be later on updated one)
        //Action - values coming like to do something we might need to some id or some other variable. All these variables will be provided by action
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                //payload is a object
                text: action.payload    
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
});

export const {addTodo, removeTodo} = todosSlice.actions;

// exporting the reducers for store.js
export default todosSlice.reducer;
