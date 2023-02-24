import { createAction, props } from "@ngrx/store";

export type validFilters  = 'all' | 'completed' | 'pendings';

export const setFilter = createAction(
    '[FILTER] set Filter',
    props<{filter:validFilters}>()
)