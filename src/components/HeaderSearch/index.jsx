import { useHistory } from 'react-router-dom';
import React, { useContext } from 'react';
import useEnterKeyListener from '../../utils/enterKey';
import Theme from '../../providers/Theme/Theme';
import { ThemeContext } from '../../providers/Theme/Theme.provider';

function HeaderSearch(props) {
  const inputTextTerm = React.useRef();
  const history = useHistory();
  const { mode } = useContext(ThemeContext);

  useEnterKeyListener({
    querySelectorToExecuteClick: '#submitButton',
  });

  const handleSubmit = () => {
    history.push('/');
    props.onchange(inputTextTerm.current.value);
  };

  return (
    <div id="search" className="w-4/6 md:w-3/6 inline">
      <input
        ref={inputTextTerm}
        className="w-4/6 md:w-5/6 rounded-l-lg p-2"
        type="text"
        placeholder={props.textPlaceholder}
      />
      <button
        type="button"
        id="submitButton"
        onClick={handleSubmit}
        className={` w-2/6 md:w-1/6 inline font-bold rounded-r-lg ${Theme[mode].TopBar.backgroundButton} ${Theme[mode].TopBar.fontColorButton} p-2`}
      >
        Go!
      </button>
    </div>
  );
}

export default HeaderSearch;
