import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Top } from './pages/Top';
import { Achievements } from './pages/Achievements';
import { Cleanings } from './pages/Cleanings';
import Login from './pages/Login';

const container = document.getElementById('root');
if (!container) {
    throw new Error('The element (id=root) does not exist.');
}
createRoot(container).render(
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/top" element={<Top />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/cleanings" element={<Cleanings />} />
        </Routes>
    </Router>
);
