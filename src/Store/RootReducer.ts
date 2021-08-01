import { initialState, IState } from "../Types/State";
import { IHandler } from "./Main";
import { moleculesPrefix } from "../Components/Molecules/Common/Common";
import { PageReducer } from "../Components/Pages/Common/PageSagaReducer";
import { pagePrefix } from "../Components/Pages/Common/Common";
import { organismsPrefix } from "../Components/Organisms/Common/Common";
import { organismsReducer } from "../Components/Organisms/Common/SagaReducer";
import { moleculesReducer } from "../Components/Molecules/Common/SagaReducer";

export default function RootReducer(state: IState = initialState, action: IHandler): IState {
    if (!action.type) return state;
    // if (action.type.startsWith('atoms')) return state;
    if (action.type.startsWith(moleculesPrefix)) return moleculesReducer(state, action);
    if (action.type.startsWith(organismsPrefix)) return organismsReducer(state, action);
    // if (action.type.startsWith('templates')) return state;
    if (action.type.startsWith(pagePrefix)) return PageReducer(state, action);

    return state;
}