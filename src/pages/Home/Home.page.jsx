import React, { useContext } from 'react';
import './Home.styles.css';
import VideosHome from '../../components/VideosHome';
import Hello from '../../components/HomeHello';
import Theme from '../../providers/Theme/Theme';
import { ThemeContext } from '../../providers/Theme/Theme.provider';

function HomePage({ txtSearch }) {
  const date = new Date();
  const hour = date.getHours();
  const { mode } = useContext(ThemeContext);

  return (
    <section className={`text-center ${Theme[mode].Layout.background} `}>
      <Hello hour={hour} />
      <div>
        <VideosHome txtSearch={txtSearch} />
      </div>
    </section>
  );
}

export default HomePage;
