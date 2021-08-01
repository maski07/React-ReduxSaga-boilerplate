import { initialState } from '../Types/State';
import configureStore from './ConfigureStore';
import rootSaga from './RootSaga';


export const store = configureStore(initialState);
store.runSaga(rootSaga);

export const handler = (
    type: string,
    meta?: any,
    payload?: PayloadType
) => store.dispatch({ type, meta, payload });

export interface IHandler {
    type: string;
    meta: any;
    payload: any;
};

// Todo: 仮 conflictしやすいから微妙？
export type PayloadType = string | number | {};