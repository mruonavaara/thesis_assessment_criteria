import '../App.css';
import fi from "../resources/fi.svg";
import en from "../resources/gb.svg";
import { DataContext } from '../context/DataContext';
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect } from 'react';

const data = {
  fi: require('../resources/data_fi.json'),
  en: require('../resources/data_en.json'),
}

function Root() {

  const location = useLocation();
  const { lang } = useParams();

    // set the html document language to enable correct hyphenation of text
    const setHtmlLang = (lang) => {
      document.documentElement.lang = lang;
  
      let title;
      if (lang === 'fi') {
        title = "Haaga-Helia - Arviointikriteerit";
      } else if (lang === 'en') {
        title = "Haaga-Helia - Assessment criteria"
      } else {
        title = "Haaga-Helia"
      }
  
      document.title = title;
    }

  // update HTML document properties whenever language changes
  useEffect(() => setHtmlLang(lang), [lang]);

  return (
    <DataContext.Provider value={data[lang]}>
      <div className='selectLanguage'>
        <div onClick={() => setHtmlLang('en')} >
          <Link to={location.pathname.replace('/fi', '/en')}><img src={en} alt='English' /></Link>
        </div>
        <div onClick={() => setHtmlLang('fi')} >
          <Link to={location.pathname.replace('/en', '/fi')}><img src={fi} alt='suomi' /></Link>
        </div>
      </div >
      <Outlet test={'foo'} />
    </DataContext.Provider>
  );
}

export default Root;