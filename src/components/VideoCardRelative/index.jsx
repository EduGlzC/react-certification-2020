import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Truncate from '../../utils/truncateString';
import Theme from '../../providers/Theme/Theme';
import { ThemeContext } from '../../providers/Theme/Theme.provider';

function VideoCardRelative({ id, urlImage, title, channel, published }) {
  const { mode } = useContext(ThemeContext);

  return (
    <Link to={`/v/${id}`}>
      <div id={id} className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
        <div className={`gap-1 ${Theme[mode].CardVideo.background} `}>
          <div className="grid md:grid-cols-2">
            <img src={urlImage} alt="" className="w-full" />
            <div
              className={`text-left text-sm font-sans p-2 mt-0 ${Theme[mode].CardVideo.fontColor}`}
            >
              {Truncate(title, 'titleRelative')}
            </div>
          </div>
          <div className="">
            <div className="flex justify-between bg-gray-400">
              <div className="flex-shrink md:flex-shrink-0 text-xs self-start p-1">
                {published}
              </div>
              <div className="md:flex-shrink-0 bg-red-500 font-serif text-xs italic text-white p-1 self-end">
                {channel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoCardRelative;
