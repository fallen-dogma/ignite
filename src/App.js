import React from 'react';
import styled from 'styled-components';

import Dashboard from './container/dashboard/Dashboard';
import AboutDialog from './container/AboutDialog';

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Dashboard />
        <AboutDialog />
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #E5E5E5;
`;

export default App;
