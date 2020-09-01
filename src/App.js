import React from 'react';
import Homepage from './Homepage';
import { Wrap } from './components/boxSize';
import './reset.css';
import { vAlbums, vMoreSinger, vSongList } from './data';

function App() {

  return (
    <Wrap>
      <Homepage />
    </Wrap>
  );
}

export default App;
