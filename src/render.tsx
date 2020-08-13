import React from 'react';
import ReactDOM from 'react-dom';
export default async function(id:string){
  const App = (await import(/* webpackChunkName: "App" */ './App')).App;
  ReactDOM.render(
    <App />,
    document.getElementById(id),
  );
}