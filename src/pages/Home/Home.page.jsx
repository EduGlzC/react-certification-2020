import React from 'react';
import './Home.styles.css';
import mockedData from './data/youtube-videos-mock.json';
import VideosHome from '../../components/VideosHome';
import Hello from '../../components/HomeHello';
/*
const greetings = (hour) => {
  let result = '';
  if (hour >= 0 && hour < 12) {
    result = 'Good morning ';
  } else if (hour > 12 && hour < 7) {
    result = 'Good afternoon ';
  } else {
    result = 'Good night ';
  }
  return result;
};
*/

const { items } = mockedData;
function HomePage() {
  const date = new Date();
  const hour = date.getHours();
  return (
    <section className="homepage">
      <Hello hour={hour} />
      <div>
        <VideosHome videos={items} />
      </div>
    </section>
  );
}

export default HomePage;
