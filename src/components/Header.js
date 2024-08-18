import '../App.css';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function Header(props) {

  const data = useContext(DataContext);
  const { label } = data;

  return (
    <header>
      <h1>
        {label.title}
      </h1>
      <p>{label.subtitle}</p>
    </header>
  );
}

export default Header;
