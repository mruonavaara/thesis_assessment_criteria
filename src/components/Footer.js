import '../App.css';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Footer(props) {

  const data = useContext(DataContext);
  const { label, reference} = data;

  return (
    <footer>
      <p>{`${label.reference}: ${reference}`}</p>
    </footer>
  );
}

export default Footer;
