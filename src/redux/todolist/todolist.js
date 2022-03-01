import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoList = createSlice({
    name: 'todo',
    initialState: {
        items: []
    },
    reducers: {
        addItem: {
            reducer: (state, action) => {
                state.items.push(action.payload)
            },
            prepare: ({ name }) => {
                return {
                    payload: {
                        id: nanoid(),
                        name: name,
                        active: false
                    }
                }
            }
        },
        delItem: (state, action) => {
            const index = state.items.findIndex((el) => el.id === action.payload)
            state.items.splice(index, 1)
        },
        activePassive: (state, action) => {
            const index = state.items.findIndex((el) => el.id === action.payload)
            state.items[index].active = !state.items[index].active
            console.log(state.items[index].active)

        },
    }
})
export const Selector = state => state.todolist.items
export const { addItem, delItem, activePassive } = todoList.actions
export default todoList.reducer
