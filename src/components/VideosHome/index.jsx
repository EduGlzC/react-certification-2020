import React, { useEffect, useState } from 'react';
import VideoCard from '../VideoCard';
import FormatPubDate from '../../utils/formatPublishedDate';

function VideosHome({ txtSearch }) {
  const [dataVideos, setDataVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('Wizeline');

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${process.env.REACT_APP_MAX_RESULTS_SEARCH}&key=${process.env.REACT_APP_API_KEY}&q=${term}&type=video`
    )
      .then((res) => res.json())
      .then((data) => {
        setDataVideos(data.items);
        setIsLoading(false);
        if (txtSearch !== '') {
          if (term !== txtSearch) {
            setTerm(txtSearch);
          }
        }
      })
      .catch((err) => console.log(err));
  }, [term, txtSearch]);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-5 gap-4">
          {dataVideos.map((item) => (
            <VideoCard
              key={item.id.videoId}
              id={item.id.videoId}
              urlImage={item.snippet.thumbnails.medium.url}
              title={item.snippet.title}
              description={item.snippet.description}
              publishedDate={FormatPubDate(item.snippet.publishTime)}
              channel={item.snippet.channelTitle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default VideosHome;
