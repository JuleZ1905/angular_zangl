import { createAction } from "@ngrx/store";

export const getTasks = createAction("[Tasks] Get Tasks");
export const deleteTask = createAction("[Tasks] Delete Task", (id: number) => ({ id }));
export const addTask = createAction("[Tasks] Add Task", (task: any) => ({ task }));

