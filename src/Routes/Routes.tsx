
import React, { Suspense } from "react";
import {
    Router,
    Switch,
    useLocation,
    useHistory,
} from "react-router-dom";
import history from "./History";

// import Loader from "../components/Loader/Loader";
// import PrivateRoute from "../utils/PrivateRoute";
// import store from "../store";

const Routes = () => {
    const location = useLocation();
    const History = useHistory();
    console.log(location, History);
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
        // <Suspense fallback={<Loader />}>
        <Suspense fallback={<div />}>
            <Router history={history}>
                <Switch>
                    {/* <LazyComponent.Login path="/:lang/login" exact /> */}
                    {/* <PrivateRoute component={LazyComponent.Home} path="/:lang/" exact /> */}
                    {/* <Redirect from="**" to={`/${lang}/`} exact /> */}
                </Switch>
            </Router>
        </Suspense>
    );
};

export default Routes;
