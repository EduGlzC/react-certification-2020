import React from 'react';
import './Home.styles.css';
import mockedData from './data/youtube-videos-mock.json';
import VideosHome from '../../components/VideosHome';

function greetings() {
  let result = '';
  const date = new Date();
  const hour = date.getHours();
  if (hour >= 0 && hour < 12) {
    result = 'Good morning ';
  } else if (hour > 12 && hour < 7) {
    result = 'Good afternoon ';
  } else {
    result = 'Good night ';
  }
  return result;
}

const Hello = () => <h1 className="text-center">Howdy, {greetings()} Wizeliner!</h1>;
const { items } = mockedData;
function HomePage() {
  return (
    <section className="homepage">
      <Hello />
      <div>
        <VideosHome videos={items} />
      </div>
    </section>
  );
}

export default HomePage;
