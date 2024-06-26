import { createRoot } from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
if (!root) {
    throw new Error('root not found');
}
const container = createRoot(root);

container.render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
);
