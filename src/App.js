import './App.css';
import { StrictMode } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

// language specific data
import data_fi from "./resources/data_fi.json";
import data_en from "./resources/data_en.json";

import CriteriaTable from './components/CriteriaTable';

const router = createBrowserRouter([
  {
    path: "/fi",
    element: <CriteriaTable data={data_fi} />
  },
  {
    path: "/en",
    element: <CriteriaTable data={data_en} />
  },
  {
    path: "/*",
    element: <Navigate to="/fi" />
  }
]);

function App() {
  return (
    <div className="App">
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </div>
  );
}

export default App;
