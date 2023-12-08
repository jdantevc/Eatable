import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import ErrorPage from './components/ErrorPage';
import ShowProduct from './pages/ShowProduct/ShowProduct';
import { ProdProvider } from './context/productContext';
import CreateProduct from './pages/CreateProduct/CreateProduct';
import EditProduct from './pages/EditProduct/EditProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "show",
    element: <ShowProduct />,
  },
  {
    path: "create",
    element: <CreateProduct />,
  },
  {
    path: "edit",
    element: <EditProduct />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProdProvider>
      <RouterProvider router={router}/>
    </ProdProvider>
  </React.StrictMode>,
);