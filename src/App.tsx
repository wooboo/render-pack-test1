import React from 'react';
import image from '../assets/sample.jpg';
import style from './App.scss';
export const App = () => (
  <div className={style.app}>
    React Starter
    <span role="img" aria-label="rocket ship">
      🚀
    </span>
    <div className={style.sassyDiv}>Get Sassy!</div>
    <img src={image} alt="sample"/>
  </div>
);