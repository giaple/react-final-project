import React from 'react';

import './App.css';
import ProfileBar from '../ProfileBar/ProfileBar';
import LeftSide from '../../components/UI/LeftSide/LeftSide';
import RightSide from '../../components/UI/RightSide/RightSide';

function App() {
  return (
    <div className="App scrollable">
      <ProfileBar />
      <div className="flex">
        <LeftSide />
        <RightSide />
      </div>

    </div>
  );
}

export default App;
