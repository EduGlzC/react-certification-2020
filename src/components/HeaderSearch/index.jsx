import React from 'react';

const HeaderSearch = (props) => (
  <div id="search" className="w-4/6 md:w-3/6 inline">
    <input
      className="w-4/6 md:w-5/6 rounded-l-lg p-2"
      type="text"
      placeholder={props.textPlaceholder}
    />
    <div className="w-2/6 md:w-1/6 inline rounded-r-lg bg-gray-600 text-white p-3">
      Go!
    </div>
  </div>
);

export default HeaderSearch;
