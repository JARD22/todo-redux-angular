import { ActionReducerMap } from "@ngrx/store";
import { validFilters } from "./filter/filter.actions";
import { _filterReducer } from "./filter/filter.reducer";
import { Todo } from "./todos/models/todo.model";
import { _todoReducer } from "./todos/todo.reducers";

export interface AppState {
    todos: Todo[],
    filter: validFilters
}

export const appReducers : ActionReducerMap<AppState> ={
    todos: _todoReducer,
    filter: _filterReducer
}