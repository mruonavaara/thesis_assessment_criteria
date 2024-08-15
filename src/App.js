import './App.css';
import { StrictMode } from 'react';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import CriteriaApp from './components/CriteriaApp';
import Root from './components/Root';

// common thesis category definitions
import thesis_categories from "./resources/categories.json";

// // loader for language specific data
// const DEFAULT_LANG = 'fi';

// const loader = ({ params }) => {
//   const { lang } = params;

//   let data;
//   try {
//     data = require(`./resources/data_${lang}.json`);

//   } catch (error) {
//     console.error(`Unknown language '${lang}', defaulting to '${DEFAULT_LANG}'`);
//     data = require(`./resources/data_${DEFAULT_LANG}.json`);
//   }

//   return data;
// }

const router = createHashRouter([
  {
    path: "/:lang",
    element: <Root />,
    children: [
      {
        path: ":cat",
        element: <CriteriaApp thesis_categories={thesis_categories} />,
      }
    ]
  },
  {
    path: "/*",
    element: <Navigate to={`/fi`} replace={true} />,
  }
]);

// const router = createHashRouter(
//   createRoutesFromElements(
//     <Route element={<Root />} >
//       <Route path="/:lang/:cat?"
//         loader={loader}
//         element={<CriteriaApp thesis_categories={thesis_categories} />}
//       />
//     </Route>

//   )
// )


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
