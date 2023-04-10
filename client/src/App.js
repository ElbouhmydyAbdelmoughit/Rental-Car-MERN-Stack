import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ERROR404 from "./pages/ERROR404/ERROR404";
import Dashboard from "./pages/Dashboard/Dashdoard";
import Order from "./pages/Order/Order";
import Client from "./pages/Client/Client";
import Car from "./pages/Car/Car";
import PrivateAdminRoute from "./components/PrivateAdminRoute/PrivateAdminRoute";
import UpdateCar from "./pages/Car/UpdateCar";
import Command from "./pages/Command/Command";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ERROR404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/command/:id" element={<Command />} />
        <Route element={<PrivateAdminRoute />}>
          <Route element={<Dashboard />}>
            <Route index path="/order" element={<Order />} />
            <Route path="/client" element={<Client />} />
            <Route path="/car" element={<Car />} />
            <Route path="/update/:id" element={<UpdateCar />} />
          </Route>
        </Route>
      </Routes>
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default App;
