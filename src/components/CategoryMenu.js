import '../App.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { useParams } from 'react-router-dom';

// common thesis category definitions
import { thesis_categories } from '../context/globals';

function CategoryMenu(props) {

  const data = useContext(DataContext);
  const { category_label } = data;

  const categoryKeys = Object.keys(thesis_categories);

  const { lang } = useParams();

  return (
    <nav className='CategoryMenu'>
      {categoryKeys.map((category, i) => (
        <NavLink key={category} to={`/${lang}/${category}`}>{category_label[category]}</NavLink>
      ))}
    </nav>
  );
}

export default CategoryMenu;
