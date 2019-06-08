import React from 'react';
import styled from 'styled-components';

import AppBar from './container/AppBar';
import Dashboard from './container/dashboard/Dashboard';

function App() {
  return (
    <AppContainer>
      <Dashboard />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #E5E5E5;
`;

export default App;
