import React from 'react';

function greeting(h) {
  let result = '';
  if (h.hour > -1 && h.hour < 12) {
    result = 'Good morning';
  } else if (h.hour > 11 && h.hour < 19) {
    result = 'Good afternoon';
  } else {
    result = 'Good night';
  }
  return result;
}

const Hello = ({ hour }) => (
  <h1 className="text-center">Howdy, {greeting({ hour })} Wizeliner!</h1>
);

export default Hello;
