import {createBrowserRouter} from 'react-router-dom'
import App from '../App';
import Home from '../pages/Home';
import SignupPage from '../pages/SignupPage';
import Loginpage from '../pages/Loginpage';
import DashboardPage from '../pages/DashboardPage';
import PrivateRoute from '../components/PrivateRoute';

const router = createBrowserRouter([
    {
        path : '/',
        element : <App />,
        children : [
            {
                path : '/',
                element : <Home />
            },
            {
                path : '/signup',
                element : <SignupPage />
            },
            {
                path : '/login',
                element : <Loginpage />
            },
        ]
        
    },
    {
        path : '/dashboard',
        element : <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
    },
])

export default router;