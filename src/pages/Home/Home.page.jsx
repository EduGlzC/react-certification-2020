import React from 'react';
import './Home.styles.css';
import VideosHome from '../../components/VideosHome';
import Hello from '../../components/HomeHello';

function HomePage({ txtSearch }) {
  const date = new Date();
  const hour = date.getHours();
  return (
    <section className="homepage">
      <Hello hour={hour} />
      <div>
        <VideosHome txtSearch={txtSearch} />
      </div>
    </section>
  );
}

export default HomePage;
