import React from 'react';
import ReactDOM from 'react-dom';
import Central from './Components/Central'
import Topo from './Components/Topo'

import './App.css'


ReactDOM.render(
  <div>
    <Topo></Topo>
        <Central></Central>
  </div>,
  document.getElementById('root')
);