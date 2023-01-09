import './App.css';
import { useState } from 'react';

import fi from "./resources/fi.svg";
import en from "./resources/gb.svg";
import data_fi from "./resources/data_fi.json"
import data_en from "./resources/data_en.json"

function App() {
  const [data, setData] = useState(data_fi);
  const [category, setCategory] = useState(0);

  const { thesis_categories, mark, evaluation_targets, label } = data;

  const setDocumentLang = (lang) => {
    document.documentElement.lang = lang;
  };

  return (
    <div className="App">
      <header>
        <div className='selectLanguage'>
          <img src={fi} alt='suomi' onClick={() => { setData(data_fi); setDocumentLang('fi') }} />
          <img src={en} alt='English' onClick={() => { setData(data_en); setDocumentLang('en') }} />
        </div>

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
              <th>{evaluation_targets[target] ? evaluation_targets[target].name : 'Unknown evaluation target'}</th>
              {Object.values(evaluation_targets[target] ? evaluation_targets[target].criterion : ['missing']).map((c, i) =>
                <td key={i}>{c.split('\n').map(str => <p key={str}>{str.split('/').map((s, i) => <>{i ? '/' : ""}<wbr />{s}</>)}</p>)}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;

// <td style={{ whiteSpace: "pre-wrap" }}>{c}</td>
