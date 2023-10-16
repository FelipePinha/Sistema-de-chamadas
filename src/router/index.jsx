import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { SignIn } from '../pages/Signin/SignIn';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <SignIn />,
            },
        ],
    },
]);

export default router;
