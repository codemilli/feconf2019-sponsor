import React from 'react';
import css from './Sponsor.scss';
import Hero from "./components/Hero/Hero";
import History from "./components/History/History";
import SponsorInfo from "./components/SponsorInfo/SponsorInfo"
import Footer from "./components/Footer/Footer"
import Head from 'next/head';

interface Props {}

const Sponsor: React.FC<Props> = () => {
  return (
    <>
      <Head>
        <base href="/" />
      </Head>
      <div className={css.Sponsor}>
        <Hero/>
        <History/>
        <SponsorInfo/>
        <Footer/>
      </div>
    </>
  );
}

export default Sponsor;
