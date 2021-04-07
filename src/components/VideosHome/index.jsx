import React from 'react';
import VideoCard from '../VideoCard';

const KIND_FOR_CHANNEL = 'youtube#channel';

const VideosHome = ({ videos }) => (
  <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-5 gap-4">
    {videos
      .filter((item) => {
        return item.id.kind !== KIND_FOR_CHANNEL;
      })
      .map((item) => (
        <VideoCard
          key={item.id.videoId}
          urlImage={item.snippet.thumbnails.medium.url}
          title={item.snippet.title}
          description={item.snippet.description}
          publishedDate={item.snippet.publishTime}
          channel={item.snippet.channelTitle}
        />
      ))}
  </div>
);

export default VideosHome;
