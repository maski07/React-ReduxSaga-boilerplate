import { call } from "redux-saga/effects"
import { moleculesPrefix } from "../Components/Molecules/Common/Common";
import { moleculesSaga } from "../Components/Molecules/Common/SagaReducer";
import { organismsPrefix } from "../Components/Organisms/Common/Common";
import { organismsSaga } from "../Components/Organisms/Common/SagaReducer";
import { PageSaga } from "../Components/Pages/Common/PageSagaReducer";
import { IState } from "../Types/State";
import { IHandler } from "./Main";


export function* saga(state: IState, action: IHandler) {
    if (!action.type) return;
    // if (action.type.startsWith('atoms')) yield call(AtomsSaga);
    if (action.type.startsWith(moleculesPrefix)) yield call(moleculesSaga, action);
    if (action.type.startsWith(organismsPrefix)) yield call(organismsSaga, action);
    // if (action.type.startsWith('templates')) yield call(templatesSaga);
    if (action.type.startsWith('pages')) yield call(PageSaga, action);
}