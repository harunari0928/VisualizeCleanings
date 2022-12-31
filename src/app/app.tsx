import React from 'react';
import { createRoot } from 'react-dom/client';
import '../stylesheet/app.scss';
import { Base } from './Base';


const container = document.getElementById('root');
if (!container) {
    throw new Error('The element (id=root) does not exist.');
}
createRoot(container).render(<Base />);
