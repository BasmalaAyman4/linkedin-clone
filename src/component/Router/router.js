import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../login/Login';
const router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    )
}

export default router
