import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import {changeTextAreaText} from './redux/state';


export let renderEntireTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} changeTextAreaText={changeTextAreaText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


