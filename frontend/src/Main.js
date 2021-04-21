import React from 'react';
import { SideNavContainer, Title } from '../styled/sidenav';
import { ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import AppNavigation from './Sidebar';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

class MainPage extends React.Component {
  state = { selectedPath: 'home'};

  changePath = (path) => {
    this.setState({ selectedPath: path });
  }

  displayText = () => {
    return (
      <div style={{ margin: '50px', color: 'green' }}>
        {this.state.selectedPath}
      </div>
    );
  }

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <ThemeProvider theme={theme}>
          <SideNavContainer>
            <Title>SideNav</Title>
            <AppNavigation changePath={this.changePath} />
          </SideNavContainer>
        </ThemeProvider>
        {this.displayText()}
      </div>
    );
  }
}

export default MainPage;