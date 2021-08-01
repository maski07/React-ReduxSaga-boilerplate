import { todoListPrefix as prefix } from "../../Molecules/ToDoList/Actions";

export const actionTypes = {
    /** 初期表示処理 */
    InitialDisplay: prefix + 'InitialDisplay',
    /** todoの入力 */
    InputMemo: prefix + 'InputMemo',
    /** todoの登録 */
    RegisterMemo: prefix + 'RegisterMemo',
} as const;
