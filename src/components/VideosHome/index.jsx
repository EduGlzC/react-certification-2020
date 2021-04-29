import React, { useEffect, useState } from 'react';
import VideoCard from '../VideoCard';
import FormatPubDate from '../../utils/formatPublishedDate';

function VideosHome({ txtSearch }) {
  const [dataVideos, setDataVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextPageToken, setNextPageToken] = useState('');
  const [prevPageToken, setPrevPageToken] = useState('');
  const [term, setTerm] = useState('Wizeline');
  const [buttonNext, setButtonNext] = useState(false);
  const [buttonPrev, setButtonPrev] = useState(false);

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
            setButtonPrev(false);
            setNextPageToken('');
            setPrevPageToken('');
            setDataVideos([]);
            setTerm(txtSearch);
          }
        }
        if ('nextPageToken' in data) {
          setNextPageToken(data.nextPageToken);
          setButtonNext(true);
        } else {
          setNextPageToken('');
          setButtonNext(false);
        }
      })
      .catch((err) => console.log(err));
  }, [term, txtSearch]);

  function getMoreData(txtTerm, token) {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${process.env.REACT_APP_MAX_RESULTS_SEARCH}&key=${process.env.REACT_APP_API_KEY}&q=${txtTerm}&type=video&pageToken=${token}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDataVideos(data.items);
        setIsLoading(false);
        if ('nextPageToken' in data) {
          setNextPageToken(data.nextPageToken);
          setButtonNext(true);
        } else {
          setNextPageToken('');
          setButtonNext(false);
        }
        if ('prevPageToken' in data) {
          setPrevPageToken(data.prevPageToken);
          setButtonPrev(true);
        } else {
          setPrevPageToken('');
          setButtonPrev(false);
        }
      })
      .catch((err) => console.log(err));
  }

  function moreContent(t, e) {
    e.preventDefault();
    console.log('The link was clicked.');
    getMoreData(term, t);
  }

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
      <div className="flex-row text-center space-x-10 flex-shrink md:flex-shrink-0">
        {buttonPrev ? (
          <button
            className="bg-red-700 text-center text-gray-300 p-2"
            type="button"
            onClick={(e) => moreContent(prevPageToken, e)}
          >
            &#171; Previous {process.env.REACT_APP_MAX_RESULTS_SEARCH} results
          </button>
        ) : null}
        {buttonNext ? (
          <button
            className="bg-red-700 text-center text-gray-300 p-2"
            type="button"
            onClick={(e) => moreContent(nextPageToken, e)}
          >
            Next {process.env.REACT_APP_MAX_RESULTS_SEARCH} results &#187;
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default VideosHome;
