import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Pricing from './Pricing';
import { connect } from 'react-redux'
import * as storeSMSTypeAction from '../actions/index';


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.dispatch(storeSMSTypeAction.storeSMSType(value));
    this.props.dispatch(storeSMSTypeAction.calculatePricing());
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
    this.props.dispatch(storeSMSTypeAction.storeSMSType(index));
    this.props.dispatch(storeSMSTypeAction.calculatePricing());

  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
            {this.props.showPricing ?
            <div>
              <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Inbound and Outbound" />
            <Tab label="Inbound" />
            <Tab label="Outbound" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><Pricing /></TabContainer>
          <TabContainer dir={theme.direction}><Pricing /></TabContainer>
          <TabContainer dir={theme.direction}><Pricing /></TabContainer>
        </SwipeableViews>
            </div> : null}

      
      </div>
    );
  }
}
const mapStateToProps = state => ({
  dispatch: PropTypes.func,
  showPricing: state.CountryReducer.showPricing,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
})

const FullWidthTabsD = withStyles(styles, { withTheme: true })(
  FullWidthTabs);

export default connect(
  mapStateToProps)(FullWidthTabsD);
