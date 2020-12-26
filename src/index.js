import React from 'react';
import ReactDOM from 'react-dom';
import Topo from './Components/Topo'
import Central from './Components/Central'
import Inferior from './Components/Inferior'

import './App.css'

ReactDOM.render(
  <div>
    <Topo></Topo>
    <Central></Central>
    <Inferior></Inferior>
  </div>,
  document.getElementById('root')
);