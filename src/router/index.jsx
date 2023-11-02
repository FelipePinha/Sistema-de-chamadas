import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { SignIn } from '../pages/login/SignIn';
import { SignUp } from '../pages/login/SignUp';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { Customers } from '../pages/Customers/Customers';
import { Profile } from '../pages/Profile/Profile';
import { NewOrder } from '../pages/NewOrder/NewOrder';

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
            {
                path: '/perfil',
                element: <Profile />,
            },
            {
                path: '/new',
                element: <NewOrder />,
            },
            {
                path: '/new/:id',
                element: <NewOrder />,
            },
        ],
    },
]);

export default router;
