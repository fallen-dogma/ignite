import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '../../components/icons/DashBoard';
import HistoryIcon from '../../components/icons/HistoryIcon';
import ExportImportIcon from '../../components/icons/ImportExportIcon';
import AboutIcon from '../../components/icons/AboutIcon';
import List from '@material-ui/core/List';
import * as AppActions from '../../actions/App';
import { connect } from 'react-redux';

@connect(state => ({
  open: state.App.isAboutDialogShown
}), dispatch => ({
  showAboutDialog: () => dispatch(AppActions.showAboutDialog()),
  hideActionDialog: () => dispatch(AppActions.hideAboutDialog())
}))

class MainList extends React.Component {

  onClickAboutButton = () => {
    const { open, showAboutDialog, hideActionDialog } = this.props;
    open ? hideActionDialog() : showAboutDialog();
  }

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
            <ListItemText primary="历史记录" onClick={() => window.location='chrome://history'} />
          </ListItem>
          <ListItem button>
            <ExportImportIcon />
            <ListItemText primary="导入/导出" />
          </ListItem>
          <ListItem button>
            <AboutIcon />
            <ListItemText primary="关于项目" onClick={this.onClickAboutButton}/>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default MainList;