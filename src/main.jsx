import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { OrderProvider } from './context/OrderContext';
import router from './router/index';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <OrderProvider>
            <RouterProvider router={router} />
        </OrderProvider>
    </React.StrictMode>
);
