import React from 'react';
import useEnterKeyListener from '../../utils/enterKey';

function HeaderSearch(props) {
  const inputTextTerm = React.useRef();

  useEnterKeyListener({
    querySelectorToExecuteClick: '#submitButton',
  });

  const handleSubmit = () => {
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
        className="w-2/6 md:w-1/6 inline rounded-r-lg bg-gray-600 text-white p-3"
      >
        Go!
      </button>
    </div>
  );
}

export default HeaderSearch;
