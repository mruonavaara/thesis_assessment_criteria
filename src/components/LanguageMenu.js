import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function LanguageMenu({ lang }) {
  const location = useLocation();

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
    <div className='LanguageMenu'>
      <div onClick={() => setHtmlLang('en')} >
        <Link to={location.pathname.replace('/fi', '/en')}>English</Link>
      </div>
      <div onClick={() => setHtmlLang('fi')} >
        <Link to={location.pathname.replace('/en', '/fi')}>Suomi</Link>
      </div>
    </div >
  );
}

export default LanguageMenu;