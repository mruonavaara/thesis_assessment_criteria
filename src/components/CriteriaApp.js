import '../App.css';
import { useContext, useEffect, useState } from 'react';
import SelectLanguage from './SelectLanguage';
import CriteriaTable from './CriteriaTable';
import { useLoaderData, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

function CriteriaApp(props) {

  //const data = useLoaderData();
  const data = useContext(DataContext);
  const { cat } = useParams();;
  console.log(cat);

  const { thesis_categories } = props;
  const { category_label, label, reference } = data;

  const categoryKeys = Object.keys(thesis_categories);
  // const [category, setCategory] = useState(0);  // default to first category

  // // evaluation targets for all categories
  // const evaluationTargets = Object.values(thesis_categories);
  // // evaluation targets for selected category
  // const [categoryEvaluationTargets, setCategoryEvaluationTargets] = useState(evaluationTargets[0]); // default to first category

  // const handleSelectCategory = event => {
  //   setCategory(event.target.value); 
  // };

  // // set the evaluation targets whenever category selection changes
  // useEffect(() => {
  //   setCategoryEvaluationTargets(evaluationTargets[category]);
  // }, [category, evaluationTargets])

    return (
    <div className="App">
      <header>
        <div className='titleBlock'>
          <h1>
            {label.title}
          </h1>
          <p>{label.subtitle}</p>
        </div>
      </header>

      <main>
      {categoryKeys.map((cat, i) => (<NavLink key={cat} to={`../${cat}`}>{category_label[cat]}</NavLink>))}
        <h2>
          {label.thesis_category}: {category_label[cat]}
        </h2>
        
        <CriteriaTable data={data}  categoryEvaluationTargets={thesis_categories[cat]} />
      </main>

      <footer>
        <p>{`${label.reference}: ${reference}`}</p>
      </footer>
    </div>
  );
}

export default CriteriaApp;
