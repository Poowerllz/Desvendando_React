import React from 'react';
import ReactDOM from 'react-dom';


import Topo from './Components/Navbar/Topo'
import './Components/Navbar/Navbar.css'

import Central from './Components/Body/Central'
import './Components/Body/Central.css'


import Inferior from './Components/Inferior'

import './App.css'


ReactDOM.render(
  <div className="Content">
    <Topo></Topo>
    <Central></Central>
    <Inferior></Inferior>
  </div>,
  document.getElementById('root')
);