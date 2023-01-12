import fi from "../resources/fi.svg";
import en from "../resources/gb.svg";

import { Link } from "react-router-dom";

function SelectLanguage() {
  return (
    <div className='selectLanguage'>
      <Link to={'/en'}><img src={en} alt='English' /></Link>
      <Link to={'/fi'}><img src={fi} alt='suomi' /></Link>
    </div>
  );
}

export default SelectLanguage;