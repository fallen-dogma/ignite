/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, siteName, description, mark) {
  return { id, date, siteName, description, mark };
}

const rows = [
  createData(0, '2019年6月9日 03:58', 'Elvis Presley', '', 312.44),
  createData(1, '2019年6月9日 01:20', 'Paul McCartney', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '2019年6月8日 23:37', 'Tom Scholz', 'MC ⠀•••• 1253', 100.81),
  createData(3, '2019年6月8日 19:41', 'Michael Jackson', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '2019年6月8日 15:04', '百度(https://baidu.com)', 'Canvas中设置图片'),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>近期活动</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>日期</TableCell>
            <TableCell>访问站点</TableCell>
            <TableCell>活动摘要</TableCell>
            <TableCell align="right">备注</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.siteName}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell align="right">{row.mark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
