import fi from "../resources/fi.svg";
import en from "../resources/gb.svg";

import { useEffect } from "react";
import { Link } from "react-router-dom";

function SelectLanguage({ lang }) {

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

  useEffect(() => setHtmlLang(lang), [lang]);

  return (
    <div className='selectLanguage'>
      <div onClick={() => setHtmlLang('en')} >
        <Link to={'/en'}><img src={en} alt='English' /></Link>
      </div>
      <div onClick={() => setHtmlLang('fi')} >
        <Link to={'/fi'}><img src={fi} alt='suomi' /></Link>
      </div>
    </div >
  );
}

export default SelectLanguage;