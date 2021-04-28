import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ id, urlImage, title, description, publishedDate, channel }) => (
  <Link to={`/v/${id}`}>
    <div id={id} className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={urlImage} alt="" className="w-full" />
      <div>
        <div className="font-bold text-black text-left font-sans px-2 mb-2 h-10">
          {title}
        </div>
        <div className="text-sm text-left font-sans h-20 px-2">{description}</div>
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

export default VideoCard;
