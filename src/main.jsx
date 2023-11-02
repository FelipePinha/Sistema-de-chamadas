import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { OrderProvider } from './context/OrderContext';
import router from './router/index';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <OrderProvider>
            <RouterProvider router={router} />
            <ToastContainer />
        </OrderProvider>
    </React.StrictMode>
);
