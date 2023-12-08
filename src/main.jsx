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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProdProvider>
      <RouterProvider router={router}/>
    </ProdProvider>
  </React.StrictMode>,
);