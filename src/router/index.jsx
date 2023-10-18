import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { SignIn } from '../pages/login/SignIn';
import { SignUp } from '../pages/login/SignUp';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Customers } from '../pages/Customers/Customers';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <SignIn />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
            {
                path: '/clientes',
                element: <Customers />,
            },
        ],
    },
]);

export default router;
