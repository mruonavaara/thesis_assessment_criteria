import '../App.css';
import { DataContext } from '../context/DataContext';
import { useParams } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import CategoryMenu from './CategoryMenu';
import CriteriaApp from './CriteriaApp';
import LanguageMenu from './LanguageMenu';

// criteria data in different languages
import { criteria_data } from '../context/globals';

function Root() {
  const { lang } = useParams();

  return (
    <DataContext.Provider value={criteria_data[lang]}>
      <LanguageMenu />
      <Header />
      <CategoryMenu />
      <CriteriaApp />
      <Footer />
    </DataContext.Provider>
  );
}

export default Root;