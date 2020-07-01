import React from 'react';
import PrimaryHeader from '../src/header/Header';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div>
      <PrimaryHeader />
      <h1>Speak Loud</h1>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}

export default App;
