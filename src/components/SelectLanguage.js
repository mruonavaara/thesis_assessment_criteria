import fi from "../resources/fi.svg";
import en from "../resources/gb.svg";

import { Link } from "react-router-dom";

function SelectLanguage() {

  // set the html document language to enable correct hyphenation of text
  const setHtmlLang = (lang) => {
    document.documentElement.lang = lang;
  }

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