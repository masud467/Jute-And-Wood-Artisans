import React  from 'react'
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
import PrivateRoute from './Routes/PrivateRoute';
import ViewDetails from './Pages/ViewDetails';
import UpdateItem from './Pages/UpdateItem';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
     {
      path:'/',
      element:<Home></Home>,
      loader:  () =>  fetch("http://localhost:6001/item"),
     },
     {
      path:'/item/:id',
      element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
      
      
     },
     {
      path:'/allitem',
      element:<AllItems></AllItems>,
      loader:()=> fetch("http://localhost:6001/item")
     },
     {
      path:'/additem',
      element:<PrivateRoute><AddItems></AddItems></PrivateRoute>
     },
     {
      path:'/mycart',
      element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
     },
     {
      path:'/update/:id',
      element:<PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>,
      loader:({params})=> fetch(`http://localhost:6001/item/${params.id}`)
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
