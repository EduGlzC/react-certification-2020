import React from 'react';

const HeaderNav = (props) => (
  <div className="w-1/6">
    <div className=" h-10 w-10 flex items-cente  justify-center p-1">
      <img src={props.icon} alt="" title={props.message} />
    </div>
  </div>
);

export default HeaderNav;
