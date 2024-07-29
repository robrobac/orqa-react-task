import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import OrgChart from './pages/orgChart/OrgChart.jsx';
import Employees from './pages/employees/Employees.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <OrgChart />,
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
