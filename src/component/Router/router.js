import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../login/Login';
import Home from '../../pages/Home';
const router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default router
