import './App.css';
import { StrictMode } from 'react';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import ErrorElement from './components/ErrorElement'

const router = createHashRouter([
  {
    path: "/:lang/:cat?",
    element: <Root />,
    errorElement: <ErrorElement />
  },
  {
    path: "/*",
    element: <Navigate to={`/fi`} replace={true} />,
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
