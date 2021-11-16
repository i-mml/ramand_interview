import React,  { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PublicRoute from "./Routes/PublicRoute";
import PrivateRoute from "./Routes/PrivateRoute";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import Header from "./Components/Header";
 import "./App.css";

const Login  = React.lazy(() => import("./Pages/Login"));
const Home  = React.lazy(() => import("./Pages/Home"));
const Page404  = React.lazy(() => import("./Pages/404"));

function App() {
  const isLogin = useSelector((state) => state.authReducer);
  return (
    <>
      <Router>
        <Suspense fallback={<Spin />}>
          <Switch>
            <PublicRoute path="/login" isAuthenticated={isLogin}>
              <Login />
            </PublicRoute>
            <PrivateRoute exact path="/" isAuthenticated={isLogin}>
              <Home />
            </PrivateRoute>
            <Route path="" component={Page404} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
