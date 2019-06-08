import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '../../components/icons/DashBoard';
import HistoryIcon from '../../components/icons/HistoryIcon';
import ExportImportIcon from '../../components/icons/ImportExportIcon';
import AboutIcon from '../../components/icons/AboutIcon';
import List from '@material-ui/core/List';

class MainList extends React.Component {

  render() {
    return (
      <div>
        <List>
          <ListItem button>
            <DashboardIcon />
            <ListItemText primary="总览" />
          </ListItem>
          <ListItem button>
            <HistoryIcon />
            <ListItemText primary="历史记录" />
          </ListItem>
          <ListItem button>
            <ExportImportIcon />
            <ListItemText primary="导入/导出" />
          </ListItem>
          <ListItem button>
            <AboutIcon />
            <ListItemText primary="关于项目" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default MainList;