import React from 'react';
import BrowsingActivities from '../BrowsingActivities';
import mockData from '../../data/graph';

export default function Chart() {
  return (
    <React.Fragment>
      <BrowsingActivities data={ mockData }/>
    </React.Fragment>
  );
}
