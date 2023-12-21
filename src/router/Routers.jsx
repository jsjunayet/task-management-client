import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navber from '../Pages/Navbar';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home/Home';
import Dashboard from '../Pages/Dashboard/Dashboard';
import MainLayout from '../Pages/MainLayout/MainLayout';
import Task from '../Pages/Task';
import Login from '../Pages/Login';

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
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/task',
                element: <Task></Task>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
]);
export default Routers;