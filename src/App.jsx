import { Outlet } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import './styles/app.scss';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Outlet />
        </QueryClientProvider>
    );
};

export default App;
