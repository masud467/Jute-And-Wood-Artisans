import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import AuthProvider from './Providers/AuthProvider';
import Register from './Pages/Register';
import AllItems from './Pages/AllItems';
import AddItems from './Pages/AddItems';
import MyCart from './Pages/MyCart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
     {
      path:'/',
      element:<Home></Home>
     },
     {
      path:'/allitem',
      element:<AllItems></AllItems>
     },
     {
      path:'/additem',
      element:<AddItems></AddItems>
     },
     {
      path:'/mycart',
      element:<MyCart></MyCart>
     },
     {
      path:'/login',
      element:<LogIn></LogIn>
     },
     {
      path:'/register',
      element:<Register></Register>
     }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
