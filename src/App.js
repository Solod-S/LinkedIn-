import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";

import { connect } from "react-redux";

import Login from "./components/login/Login";
import Header from "./components/shared/Header/Header";
import Home from "./components/home/Home";
import getUserAuth from "./redux/actions/getUserAuth";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, [props]);
  return (
    <Routes>
      <Route end path="/" element={<Login />} />
      <Route
        end
        path="/home"
        element={[<Header key="1" />, <Home key="2" />]}
      />
    </Routes>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
