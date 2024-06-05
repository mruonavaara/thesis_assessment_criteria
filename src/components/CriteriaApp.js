import '../App.css';
import { useEffect, useState } from 'react';
import SelectLanguage from './SelectLanguage';
import CriteriaTable from './CriteriaTable';

function CriteriaApp(props) {
  const { data, thesis_categories } = props;
  const { category_label, label, reference } = data;

  const categoryKeys = Object.keys(thesis_categories);
  const [category, setCategory] = useState(0);  // default to first category

  // evaluation targets for all categories
  const evaluationTargets = Object.values(thesis_categories);
  // evaluation targets for selected category
  const [categoryEvaluationTargets, setCategoryEvaluationTargets] = useState(evaluationTargets[0]); // default to first category

  const handleSelectCategory = event => {
    setCategory(event.target.value); 
  };

  // set the evaluation targets whenever category selection changes
  useEffect(() => {
    setCategoryEvaluationTargets(evaluationTargets[category]);
  }, [category, evaluationTargets])

  return (
    <div className="App">
      <SelectLanguage lang={data.lang} />
      <header>
        <div className='titleBlock'>
          <h1>
            {label.title}
          </h1>
          <p>{label.subtitle}</p>
        </div>
      </header>

      <main>
        <h2>
          {label.thesis_category}:
          <select className='selectType' name="type" onChange={handleSelectCategory} value={category}>
            {categoryKeys.map((cat, i) =>
              <option key={i} value={i}>{category_label[cat]}</option>
            )}
          </select>
        </h2>
        
        <CriteriaTable data={data}  categoryEvaluationTargets={categoryEvaluationTargets} />
      </main>

      <footer>
        <p>{`${label.reference}: ${reference}`}</p>
      </footer>
    </div>
  );
}

export default CriteriaApp;
