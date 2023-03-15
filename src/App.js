import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./components/login/Login";
import Header from "./components/home/Header";
import Home from "./components/home/Home";

function App() {
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

export default App;
