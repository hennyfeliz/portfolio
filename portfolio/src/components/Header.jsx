import { useEffect, useState } from 'react';
import '../../styles/Header.css';
import BigGithubIcon from '../assets/icons/BigGithubIcon';
import LinkedinIcon from '../assets/icons/LinkedinIcon';
import SunIcon from '../assets/icons/SunIcon';
import MoonIcon from '../assets/icons/MoonIcon';
import PersonalInfo from './PersonalInfo';

const Header = () => {

  const [dark, setDark] = useState(true);

  useEffect(() => {
    dark ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  }, [dark]);

  const darkHandler = () => {
    setDark(!dark);
  }

  return (
    <div className='header_'>
      <div className='header_1'>
        <span>
          Henny.dev
        </span>
        <div>
          {/* GITHUB ICON */}
          <BigGithubIcon />

          {/* LINKEDIN ICON */}
          <LinkedinIcon />

          {/* DARK or LIGHT MODE */}
          {
            dark ?
              <SunIcon darkHandler={darkHandler} />
              :
              <MoonIcon darkHandler={darkHandler} />
          }

        </div>
      </div>
      {/* PERSONAL INFO */}
      <PersonalInfo />
    </div>
  )
}

export default Header