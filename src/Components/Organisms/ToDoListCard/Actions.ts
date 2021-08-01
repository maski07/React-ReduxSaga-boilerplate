import { organismsPrefix } from "../Common/Common";

// todo: クラス化する？
export const todoListCardPrefix = organismsPrefix + 'TodoList_';

export const actionTypes = {
    /** TodoListカード情報取得 */
    getTodoListCard: todoListCardPrefix + 'GetTodoList',
    /** タイトル入力 */
    inputCardTitle: todoListCardPrefix + 'InputCardTitle',
    /** POSTタイトル情報 */
    postCardTitle: todoListCardPrefix + 'PostCardTitle',
} as const;
