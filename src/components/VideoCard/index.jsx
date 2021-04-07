import React from 'react';

const VideoCard = (props) => (
  <div id="{props.key}" className="max-w-sm rounded overflow-hidden shadow-lg">
    <img src={props.urlImage} alt="" className="w-full" />
    <div className="px-2 py-4">
      <div className="font-bold text-black text-left font-sans mb-2">{props.title}</div>
      <div className="text-sm text-left font-sans">{props.description}</div>
      <div className="flex justify-between bg-gray-400">
        <div className="flex-shrink md:flex-shrink-0 text-xs self-start p-1">
          {props.publishedDate}
        </div>
        <div className="md:flex-shrink-0 bg-red-500 font-serif text-xs italic text-white p-1 self-end">
          {props.channel}
        </div>
      </div>
    </div>
  </div>
);

export default VideoCard;
