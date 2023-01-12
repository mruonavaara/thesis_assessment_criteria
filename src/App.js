import './App.css';
import { StrictMode } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import data_fi from "./resources/data_fi.json"
import data_en from "./resources/data_en.json"

import AssessmentCriteria from './components/AssessmentCriteria';

const router = createBrowserRouter([
  {
    path: "/fi",
    element: <AssessmentCriteria data={data_fi} />
  },
  {
    path: "/en",
    element: <AssessmentCriteria data={data_en} />
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
