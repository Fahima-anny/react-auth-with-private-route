import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Compo/Root.jsx';
import Home from './Compo/Home.jsx';
import Login from './Compo/Login.jsx';
import Register from './Compo/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Orders from './Compo/Orders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Profile from './Compo/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children: [
      {
        path: '/' ,
        element: <Home></Home>
      } ,
      {
        path: '/login' ,
        element: <Login></Login>
      } ,
      {
        path: '/register' ,
        element: <Register></Register>
      } ,
      {
        path: '/order' ,
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      } ,
      {
        path: '/profile' ,
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      } ,
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  </StrictMode>,
)
