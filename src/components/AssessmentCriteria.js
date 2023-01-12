import '../App.css';
import { useEffect, useState } from 'react';
import SelectLanguage from './SelectLanguage';

// common thesis category definitions
import thesis_categories from "../resources/categories.json";

const categoryKeys = Object.keys(thesis_categories);
const categoryEvalTargets = Object.values(thesis_categories);

function AssessmentCriteria(props) {
  const { data } = props;
  const { category_label, mark, evaluation_targets, label } = data;

  const [category, setCategory] = useState(0);

  const FormattedCellContent = raw =>
    <>{
      raw.split('\n').map(str => // add <p> tags around linebreak separated paragraphs
        <p key={str}>
          {str.split('/').map(   // add <wbr> hints after slashes
            (s, i) =>
              <>
                {i ? '/' : ""}<wbr />{s}
              </>)}
        </p>)
    }</>;

  useEffect(() => { document.documentElement.lang = data.lang });

  return (
    <div className="App">
      <SelectLanguage />
      <header>
        <div className='titleBlock'>
          <h1>
            {label.title}
          </h1>
          <p>{label.subtitle}</p>
        </div>
      </header>

      <h2>
        {label.thesis_category}:
        <select className='selectType' name="type" onChange={event => setCategory(event.target.value)} value={category}>
          {categoryKeys.map((cat, i) =>
            <option key={i} value={i}>{category_label[cat]}</option>
          )}
        </select>
      </h2>

      <table>
        <colgroup>
          <col className='titleColumn' />
          {Object.entries(mark).map(entry => <col className='contentColumn' key={entry} />)}
        </colgroup>
        <thead>
          <tr>
            <th rowSpan="2">{label.evaluation_target}</th>
            <th colSpan={Object.keys(mark).length}>{label.grade}</th>
          </tr>
          <tr>
            {Object.entries(mark).map(entry => <th key={entry}>{`${entry[1]} (${entry[0]})`}</th>)}
          </tr>
        </thead>
        <tbody>
          {categoryEvalTargets[category].map(target =>
            <tr key={target}>
              <th>{evaluation_targets[target] ? FormattedCellContent(evaluation_targets[target].name) : 'Unknown evaluation target'}</th>
              {Object.values(evaluation_targets[target] ? evaluation_targets[target].criterion : ['missing']).map((c, i) =>
                <td key={i}>{FormattedCellContent(c)}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AssessmentCriteria;
