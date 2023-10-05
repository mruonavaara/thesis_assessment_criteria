import '../App.css';
import { Fragment } from 'react';

function CriteriaTable(props) {
  const { data, categoryEvaluationTargets } = props;
  const { mark, evaluation_targets, label } = data;

  // Format data record strings as JSX
  const FormattedCellContent = raw =>
    <>{
      raw.split('\n').map(str => // add <p> tags around linebreak separated paragraphs
        <p key={str}>
          {str.split('/').map(   // add <wbr> hints after slashes
            (s, i) =>
              <Fragment key={i}>
                {i ? '/' : ""}<wbr />{s}
              </Fragment>)}
        </p>)
    }</>;

  return (
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
        {categoryEvaluationTargets.map(target =>
          <tr key={target}>
            <th>{evaluation_targets[target] ? FormattedCellContent(evaluation_targets[target].name) : 'Unknown evaluation target'}</th>
            {Object.values(evaluation_targets[target] ? evaluation_targets[target].criterion : ['missing']).map((c, i) =>
              <td key={i}>{FormattedCellContent(c)}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default CriteriaTable;
