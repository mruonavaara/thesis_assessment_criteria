import '../App.css';
import { useContext } from 'react';
import CriteriaTable from './CriteriaTable';
import { useParams } from 'react-router-dom';

// common thesis category definitions
import { thesis_categories } from '../context/globals';

import { DataContext } from '../context/DataContext';

function CriteriaApp(props) {
  const data = useContext(DataContext);
  const { category_label, label } = data;
  const { cat } = useParams();

  return (
    <main>
      {cat &&
        <div>
          <h2>
            {label.thesis_category}: {category_label[cat]}
          </h2>
          <CriteriaTable data={data} categoryEvaluationTargets={thesis_categories[cat]} />
        </div>
      }
    </main>
  );
}

export default CriteriaApp;
