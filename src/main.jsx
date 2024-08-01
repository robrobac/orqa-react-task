import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Employees from './pages/employees/Employees.jsx';
import OrgChartPage from './pages/orgChart/OrgChartPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <OrgChartPage />,
  },
  {
    path: "/employees",
    element: <Employees />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
