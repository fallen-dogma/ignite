import React from 'react';
import Title from './Title';
import ReactEcharts from 'echarts-for-react';
import timeChartOption from '../../data/timeChartOptions';
import echarts from 'echarts';
import echartsTheme from '../../lib/echartTheme.json';

export default class Deposits extends React.Component {
  componentWillMount() {
    echarts.registerTheme('custom', echartsTheme);
  }

  render() {
    return (
      <React.Fragment>
        <Title>最近一周高频访问站点</Title>
        <ReactEcharts
        option={timeChartOption}
        notMerge={true}
        lazyUpdate={true}
        theme={'custom'} />
      </React.Fragment>
    );
  }
}
