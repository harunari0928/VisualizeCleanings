import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackendProvider from './contexts/BackendContext';
import { Top } from './pages/Top';
import { Achievements } from './pages/Achievements';
import { Cleanings } from './pages/Cleanings';
import Login from './pages/Login';
import Signup from './pages/Signup';

const container = document.getElementById('root');
if (!container) {
    throw new Error('The element (id=root) does not exist.');
}
createRoot(container).render(
    <BackendProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/top" element={<Top />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/cleanings" element={<Cleanings />} />
            </Routes>
        </Router>
    </BackendProvider>
);
