import React, { useContext } from 'react';
import { ThemeContext } from '../../providers/Theme/Theme.provider';

const HeaderToggle = () => {
  const { mode, setTheme } = useContext(ThemeContext);

  function handleChange(value) {
    setTheme(value);
  }

  return (
    <div className="w-1/6 hidden md:block ml-3">
      <select
        className="rounded p-1 text-center bg-white"
        value={mode}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="wize">Theme Wize</option>
        <option value="dark">Theme Dark</option>
        <option value="light">Theme Light</option>
      </select>
    </div>
  );
};

export default HeaderToggle;
