import * as React from "react";
import { Home } from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </Router>
    );
}