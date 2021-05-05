import React from 'react';

const HeaderNav = ({ icon, message }) => (
  <div className="w-1/6">
    <div className=" h-10 w-10 flex items-center  justify-center p-1">
      <img src={icon} alt="" title={message} />
    </div>
  </div>
);

export default HeaderNav;
