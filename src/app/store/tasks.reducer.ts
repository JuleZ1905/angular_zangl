import { createReducer, on } from '@ngrx/store';
import { getTasks, deleteTask, addTask } from './tasks.action';

export const tasks = [
    { id: 1, name: 'Task 1', description: 'Description 1' },
    { id: 2, name: 'Task 2', description: 'Description 2' },
    { id: 3, name: 'Task 3', description: 'Description 3' },
    { id: 4, name: 'Task 4', description: 'Description 4' },
    { id: 5, name: 'Task 5', description: 'Description 5' },
]

export const taskReducer = createReducer(
    tasks,
    on(getTasks, (state) => state),
    on(deleteTask, (state, { id }) => state.filter((task) => task.id !== id)),
    on(addTask, (state, { task }) => [...state, task])
)