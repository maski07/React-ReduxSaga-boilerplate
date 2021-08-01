import { moleculesPrefix } from "../Common/Common";

export const todoListPrefix = moleculesPrefix + 'TodoList_';

export const actions = {
    increment: todoListPrefix + 'Increment',
    decrement: todoListPrefix + 'Decrement',
    inputMemo: todoListPrefix + 'InputMemo',
} as const;