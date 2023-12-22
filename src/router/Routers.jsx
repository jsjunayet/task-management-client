
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Dashboard from '../Pages/Dashboard/Dashboard';
import MainLayout from '../Pages/MainLayout/MainLayout';
import Login from '../Pages/Login';
import SignUp from '../component/SignUP/SignUp';
import Update from '../Pages/Dashboard/Update';
import AllTask from '../Pages/AllTask';

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/task',
                element: <AllTask></AllTask>
            },

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    },
    {
        path: '/dashboard/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/tasks/${params.id}`)
    }

]);
export default Routers;