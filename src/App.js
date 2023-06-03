import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "modern-normalize/modern-normalize.css";

import { connect } from "react-redux";

import { HomePage, LoginPage } from "./pages";
import getUserAuth from "./redux/actions/getUserAuth";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, [props]);
  return (
    <Routes>
      <Route end path="/" element={<LoginPage />} />
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
