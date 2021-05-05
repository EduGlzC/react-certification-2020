import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Theme from '../../providers/Theme/Theme';
import { ThemeContext } from '../../providers/Theme/Theme.provider';

function VideoCard({ id, urlImage, title, description, publishedDate, channel }) {
  const { mode } = useContext(ThemeContext);

  return (
    <Link to={`/v/${id}`}>
      <div id={id} className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={urlImage} alt="" className="w-full" />
        <div className={`text-left ${Theme[mode].CardVideo.background} `}>
          <div
            className={`font-bold text-left ${Theme[mode].CardVideo.fontColor} font-sans px-2 mb-2 h-16 leading-tight`}
          >
            {title}
          </div>
          <div
            className={` text-sm text-left font-sans h-24 px-2 ${Theme[mode].CardVideo.fontColor} `}
          >
            {description}
          </div>
          <div className="flex justify-between bg-gray-400">
            <div className="flex-shrink md:flex-shrink-0 text-xs self-start p-1">
              {publishedDate}
            </div>
            <div className="md:flex-shrink-0 bg-red-500 font-serif text-xs italic text-white p-1 self-end">
              {channel}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
