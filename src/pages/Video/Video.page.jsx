import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import VideoDetail from '../../components/VideoDetails';
import VideosRelatives from '../../components/VideosRelatives';
import Truncate from '../../utils/truncateString';
import FormatPubDate from '../../utils/formatPublishedDate';

function VideoPage() {
  const [dataVideo, setDataVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idVideo } = useParams();
  const [idVideoPlayer, setIdVideoPlayer] = useState(idVideo);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${idVideoPlayer}&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('done');
        setDataVideo(data.items[0]);
        setIsLoading(false);
        setIdVideoPlayer(idVideo);
      })
      .catch((err) => console.log(err));
  }, [idVideoPlayer, idVideo]);

  // https://www.googleapis.com/youtube/v3/videos?id=Hm3wVzcHjnE&key=AIzaSyAe7ucFPzRVCuXh8wh8UzGX_onfJFvkzMQ&part=snippet

  return (
    <section>
      <Link to="/"> ← Back</Link>
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <VideoDetail
              id={dataVideo.id}
              title={dataVideo.snippet.title}
              description={Truncate(dataVideo.snippet.description, 'descDetail')}
              published={FormatPubDate(dataVideo.snippet.publishedAt)}
              channel={dataVideo.snippet.channelTitle}
            />
          </div>
          <div className="">
            <VideosRelatives idVideo={idVideo} />
          </div>
        </div>
      )}
    </section>
  );
}

export default VideoPage;
