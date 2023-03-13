import { Route, Routes, Navigate } from "react-router-dom";

import Login from "./components/login/Login";

function App() {
  return (
    <Routes>
      <Route end path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
