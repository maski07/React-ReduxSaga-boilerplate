import { Suspense } from "react";
import { useEffect } from "react";
import {
    Router,
    Route,
    Switch,
    useLocation,
    useHistory,
} from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import TodoListPage from "../Components/Pages/ToDoListPage/TodoListPage";
import { handler, store } from "../Store/Main";
import history from "./History";
// import Loader from "../components/Loader/Loader";
// import PrivateRoute from "../utils/PrivateRoute";


const Routes = (): JSX.Element => {
    const location = useLocation();
    const History = useHistory();
    console.info(location, History);
    // const state = select<() => IState>(() => state);
    // const state: ReturnType<IState> = select();
    const state = store.getState();
    useEffect(function () {
        // const state: IState = yield select();
        // console.log(state);
        // store.dispatch(
        //     setCurrentLang(location.pathname.split("/")[1] === "en" ? "en" : "ar")
        // );
    }, []);

    // useEffect(() => {
    //     const pathname = location.pathname.split("/");
    //     pathname[1] = pathname[1] === "en" ? "en" : "ar";
    //     const newPathname = pathname.join("/");
    //     History.push(newPathname.replace(/en|ar/, lang));
    // }, [lang]);

    return (
        <Suspense fallback={<Loader />}>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={() =>
                        <TodoListPage state={state} action={handler} />} />
                    <Route path="/todoList" exact component={() =>
                        <TodoListPage state={state} action={handler} />} />
                    {/* <LazyComponent.Login path="/:lang/login" exact /> */}
                    {/* <PrivateRoute component={LazyComponent.Home} path="/:lang/" exact /> */}
                    {/* <Redirect from="**" to={`/${lang}/`} exact /> */}
                </Switch>
            </Router>
        </Suspense>
    );
};

export default Routes;
