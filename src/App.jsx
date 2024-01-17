import { React } from "react";
import "./App.css";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import Servers from './pages/Servers'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/dashboard" element={<DashBoard />}></Route>
                <Route path="/servers" element={<Servers/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
