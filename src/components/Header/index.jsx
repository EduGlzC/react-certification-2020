import React from 'react';
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

const Header = () => (
  <header className="flex flex-row bg-red-600 w-full justify-between p-2">
    <HeaderNav icon="nav-icon.png" message="Click to open menu" />
    <HeaderSearch textPlaceholder={getRandomPlaceHolder()} />
    <HeaderToggle />
    <HeaderLogin photo="login-icon.png" message="Click to login" />
  </header>
);

export default Header;
