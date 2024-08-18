import '../App.css';
import { Link } from 'react-router-dom';

function ErrorElement(props) {

  return (
    <div className='ErrorElement'>
      <h1>Sivua ei löydy | Page not found</h1>
      <Link to={`/fi`}>Pääsivu</Link>
      <Link to={`/en`}>Home page</Link>
    </div>
  );
}

export default ErrorElement;
