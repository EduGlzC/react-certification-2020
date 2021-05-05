import React from 'react';

const HeaderToggle = () => (
  <div className="w-1/6 hidden md:block">
    <select className="rounded p-1 text-center bg-white">
      <option>Theme Wize</option>
      <option>Theme Dark</option>
      <option>Theme Light</option>
    </select>
  </div>
);

export default HeaderToggle;
