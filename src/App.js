import './App.css';
import { StrictMode } from 'react';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import CriteriaApp from './components/CriteriaApp';


// common thesis category definitions
import thesis_categories from "./resources/categories.json";  

// language specific data
import data_fi from "./resources/data_fi.json";
import data_en from "./resources/data_en.json";

const router = createHashRouter([
  {
    path: "/fi",
    element: <CriteriaApp data={data_fi} thesis_categories={thesis_categories} />
  },
  {
    path: "/en",
    element: <CriteriaApp data={data_en} thesis_categories={thesis_categories} />
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
