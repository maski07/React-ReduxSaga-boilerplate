
import React, { Suspense } from "react";
import {
    Router,
    Route,
    Switch,
    useLocation,
    useHistory,
} from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import SamplePage from "../Components/Pages/SamplePage";
import history from "./History";

// import Loader from "../components/Loader/Loader";
// import PrivateRoute from "../utils/PrivateRoute";
// import store from "../store";

const Routes = (): JSX.Element => {
    const location = useLocation();
    const History = useHistory();
    console.log(location, History)
    // useEffect(() => {
    //     store.dispatch(
    //         setCurrentLang(location.pathname.split("/")[1] === "en" ? "en" : "ar")
    //     );
    // }, []);

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
                    <Route path="/" component={SamplePage} exact />
                    <Route path="/SamplePage" component={SamplePage} exact />
                    {/* <LazyComponent.Login path="/:lang/login" exact /> */}
                    {/* <PrivateRoute component={LazyComponent.Home} path="/:lang/" exact /> */}
                    {/* <Redirect from="**" to={`/${lang}/`} exact /> */}
                </Switch>
            </Router>
        </Suspense>
    );
};

export default Routes;
