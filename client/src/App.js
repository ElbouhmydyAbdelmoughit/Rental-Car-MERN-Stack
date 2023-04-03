import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ERROR404 from "./pages/ERROR404/ERROR404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ERROR404 />} />
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
