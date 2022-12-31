import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Top } from './pages/Top';
import { Achievements } from './pages/Achievements';

const container = document.getElementById('root');
if (!container) {
    throw new Error('The element (id=root) does not exist.');
}
createRoot(container).render(
    <Router>
        <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/achievements" element={<Achievements />} />
        </Routes>
    </Router>
);
