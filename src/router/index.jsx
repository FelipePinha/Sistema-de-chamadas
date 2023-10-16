import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import { SignIn } from '../pages/login/SignIn';
import { SignUp } from '../pages/login/SignUp';

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
        ],
    },
]);

export default router;
