import React from 'react';
import Title from './Title';
import BrowsingActivities from '../BrowsingActivities';
import mockData from '../../data/graph';

export default function Chart() {
  return (
    <React.Fragment>
      <Title>我的足迹</Title>
      <BrowsingActivities data={ mockData }/>
    </React.Fragment>
  );
}
