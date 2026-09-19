import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import FeaturedPhotographers from './Components/FeaturedPhotographers';
import CtaBanner from './Components/CtaBanner';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <Header />
      <main>
        <HeroSection />
        <FeaturedPhotographers />
        <CtaBanner />
      </main>
    </div>
  );
};

export default Home;