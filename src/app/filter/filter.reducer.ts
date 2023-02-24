import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, validFilters } from './filter.actions';

export const initialState: validFilters = 'all';

export const _filterReducer = createReducer<validFilters, Action>(
  initialState,
  on(setFilter, (state, {filter}) => filter),

);