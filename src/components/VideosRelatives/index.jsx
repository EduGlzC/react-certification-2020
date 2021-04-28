import React, { useEffect, useState } from 'react';
import VideoCardRelative from '../VideoCardRelative';
import FormatPubDate from '../../utils/formatPublishedDate';

function VideosRelatives({ idVideo }) {
  const [dataVideos, setDataVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [idVideoRoot, setIdVideoRoot] = useState(idVideo);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_API_KEY}&relatedToVideoId=${idVideoRoot}&type=video`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('done');
        setDataVideos(data.items);
        setIsLoading(false);
        setIdVideoRoot(idVideo);
      })
      .catch((err) => console.log(err));
  }, [idVideoRoot, idVideo]);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="p-1">
          {dataVideos.map((item) => (
            <VideoCardRelative
              key={item.id.videoId}
              id={item.id.videoId}
              urlImage={item.snippet.thumbnails.medium.url}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
              published={FormatPubDate(item.snippet.publishedAt)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default VideosRelatives;
