import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import { connect } from "react-redux";

import HomePage from "./pages/HomePage/HomePage";
import Login from "./components/login/Login";
import getUserAuth from "./redux/actions/getUserAuth";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, [props]);
  return (
    <Routes>
      <Route end path="/" element={<Login />} />
      <Route end path="/home" element={<HomePage />} />
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
