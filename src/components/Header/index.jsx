import React, { useState } from 'react';
import HeaderLogin from '../HeaderLogin';
import HeaderToggle from '../HeaderToggle';
import HeaderSearch from '../HeaderSearch';
import HeaderNav from '../HeaderNav';

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

  const onchange = (data) => {
    setValue(data);
    props.onchange(data);
  };

  return (
    <header className="flex flex-row bg-red-600 w-full justify-between p-2">
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
