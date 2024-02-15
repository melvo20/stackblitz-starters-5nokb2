import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import  from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
