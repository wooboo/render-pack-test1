import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
export default function(id:string){
  ReactDOM.render(
    <App />,
    document.getElementById(id),
  );
}