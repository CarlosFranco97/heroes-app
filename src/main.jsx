import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter} from 'react-router-dom'
import {HeroesApp} from './HeroesApp.jsx'
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <HeroesApp />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
