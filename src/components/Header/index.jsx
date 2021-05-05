import React, { useState, useContext } from 'react';
import HeaderLogin from '../HeaderLogin';
import HeaderToggle from '../HeaderToggle';
import HeaderSearch from '../HeaderSearch';
import HeaderNav from '../HeaderNav';
import Theme from '../../providers/Theme/Theme';
import { ThemeContext } from '../../providers/Theme/Theme.provider';

const msgPlaceholder = [
  'What can we help you find?',
  'Today, you are wanna watch...',
  'If you think about it, just look it up',
];

const getRandomPlaceHolder = () => {
  const indexForText = Math.round(Math.random() * (msgPlaceholder.length - 1));
  return msgPlaceholder[indexForText];
};

function Header(props) {
  const [value, setValue] = useState('');
  const { mode } = useContext(ThemeContext);

  const onchange = (data) => {
    setValue(data);
    props.onchange(data);
  };

  return (
    <header
      className={`flex flex-row w-full justify-between p-2 ${Theme[mode].TopBar.background} `}
    >
      <HeaderNav icon="/nav-icon.png" message="Click to open menu" />
      <HeaderSearch
        data={value}
        onchange={(e) => {
          onchange(e);
        }}
        textPlaceholder={getRandomPlaceHolder()}
      />
      <HeaderToggle />
      <HeaderLogin photo="/login-icon.png" message="Click to login" />
    </header>
  );
}

export default Header;
