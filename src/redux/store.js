import { configureStore } from "@reduxjs/toolkit"
import todolist from "./todolist/todolist"
export const store = configureStore({
    reducer: {
        todolist: todolist
    }
})
