import { IHandler } from "../../../Store/Main";
import { actionTypes } from "./Actions";
import { ITodoListCard } from "./TodoListType";

export function* toDoListCardSaga(action: IHandler) {
    switch (action.type) {
        /** カード情報取得処理 */
        case actionTypes.getTodoListCard: {
            console.log('カード情報取得処理');
            yield;
            break;
        }
        /** カードタイトル入力 */
        case actionTypes.inputCardTitle: {
            break;
        }
        /** カードタイトル送信 */
        case actionTypes.postCardTitle: {
            break;
        }
        default: {
            break;
        }
    }
}

export function toDoListCardReducer(todoListCard: ITodoListCard, action: any): ITodoListCard {
    switch (action.type) {
        /** カード情報取得処理 */
        case actionTypes.getTodoListCard: {
            return todoListCard;
        }
        /** カードタイトル入力 */
        case actionTypes.inputCardTitle: {
            return todoListCard;
        }
        /** カードタイトル送信 */
        case actionTypes.postCardTitle: {
            return todoListCard;
        }
        default: {
            return todoListCard;
        }
    }
}
