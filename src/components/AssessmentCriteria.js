import '../App.css';
import { useEffect, useState } from 'react';

import SelectLanguage from './SelectLanguage';

function AssessmentCriteria(props) {
  const { data } = props;
  const [category, setCategory] = useState(0);
  const { thesis_categories, mark, evaluation_targets, label } = data;

  const formatCellContent = raw =>
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
          {thesis_categories.map((t, i) =>
            <option key={i} value={i}>{t.name}</option>
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
          {thesis_categories[category].evaluation_targets.map(target =>
            <tr key={target}>
              <th>{evaluation_targets[target] ? formatCellContent(evaluation_targets[target].name) : 'Unknown evaluation target'}</th>
              {Object.values(evaluation_targets[target] ? evaluation_targets[target].criterion : ['missing']).map((c, i) =>
                <td key={i}>{formatCellContent(c)}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AssessmentCriteria;
