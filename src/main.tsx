import React from 'react';
import ReactDOM from 'react-dom';
async function run(){
  const App = (await import(/* webpackChunkName: "App" */ './App')).App;
  ReactDOM.render(
    <App />,
    document.getElementById('app'),
  );
}

run();

