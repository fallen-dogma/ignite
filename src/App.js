import React from 'react';
import styled from 'styled-components';

import AppBar from './container/AppBar';
import Center from './container/Center';

function App() {
  return (
    <AppContainer>
      <AppBar />
      <Center />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #333333;
`;

export default App;
