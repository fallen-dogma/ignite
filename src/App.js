import React from 'react';
import styled from 'styled-components';

import AppBar from './container/AppBar';
import Graph from './container/Graph';
import data from './data/blocks.json';

function App() {
  return (
    <AppContainer>
      <AppBar />
      <Graph data={data} />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #333333;
`;

export default App;
