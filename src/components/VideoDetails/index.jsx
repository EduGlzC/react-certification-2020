import React, { useContext } from 'react';
import Theme from '../../providers/Theme/Theme';
import { ThemeContext } from '../../providers/Theme/Theme.provider';

function VideoDetail({ id, title, description, published, channel }) {
  const { mode } = useContext(ThemeContext);

  return (
    <div className="rounded overflow-hidden shadow-lg h-screen">
      <div className="p-2">
        <iframe
          className="w-full h-80"
          allowFullScreen
          frameBorder="0"
          title="{title}"
          src={`https://www.youtube.com/embed/${id}?controls=0&autoplay=1`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      <div className={`text-left ${Theme[mode].CardVideo.background} `}>
        <div
          className={`font-boldtext-left text-left font-sans mb-1 leading-none h-8 px-2 ${Theme[mode].CardVideo.fontColor}`}
        >
          {title}
        </div>
        <div
          className={`text-sm text-left font-sans h-28 overflow-y-scroll overflow-visible px-2 ${Theme[mode].CardVideo.fontColor}`}
        >
          {description}
        </div>
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
  );
}

export default VideoDetail;
