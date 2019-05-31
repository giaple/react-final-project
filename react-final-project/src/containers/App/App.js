import React from 'react';

import './App.css';
import ProfileBar from '../ProfileBar/ProfileBar';
import LeftSide from '../../components/UI/LeftSide/LeftSide';
import RightSide from '../../components/UI/RightSide/RightSide';
import MacroField from '../../Contexts/MacroContext';

function App() {
  return (
    <MacroField>
    <div className="App scrollable">
      <ProfileBar />
      <div className="flex">
        <LeftSide />
        <RightSide />
      </div>

    </div>
    </MacroField>
  );
}

export default App;
