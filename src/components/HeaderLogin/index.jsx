import React from 'react';

const HeaderLogin = ({ photo, message }) => (
  <div className="w-1/6">
    <div className="rounded-full h-12 w-12 flex items-center bg-white justify-center p-1">
      <img src={photo} alt="" title={message} />
    </div>
  </div>
);

export default HeaderLogin;
