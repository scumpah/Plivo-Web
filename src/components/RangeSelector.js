import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Slider from '@material-ui/lab/Slider';
import { Slider } from 'material-ui';
import LensIcon from '@material-ui/icons/LensOutlined';
import Typography from '@material-ui/core/Typography';
import * as StoreSMSCount from '../actions/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const styles = {
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
  thumbIcon: {
    borderRadius: '50%',
  },
  thumbIconWrapper: {
    backgroundColor: '#fff',
  },
};

const muiTheme = getMuiTheme({
  slider: {
    trackSize: 10,
    selectionColor: '#2eb12e',
    rippleColor: 'rgb(4, 6, 146)',
  },
});

class StepSlider extends React.Component {
  state = {
    value: 200,
  };

  componentDidMount() {
    this.props.dispatch(StoreSMSCount.storeSMSCount(200));
  }
  handleChange = (event, value) => {
    this.setState({ value });
    this.props.dispatch(StoreSMSCount.storeSMSCount(value));
    this.props.dispatch(StoreSMSCount.calculatePricing('range'));
    // this.props.dispatch(StoreSMSCount.togglePricing(this.props.showPricing));
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Slider
          classes={{ container: classes.slider,
            thumbIconWrapper: classes.thumbIconWrapper,
          }}
          value={value}
          min={0}
          max={2000}
          step={100}
          onChange={this.handleChange}
          thumb={<LensIcon style={{ color: 'rgb(4, 6, 146)' }} />}
        />
        </MuiThemeProvider>
        <Typography variant="h5" component="h3" style ={{color:'#2eb12e', fontSize: '20px'}}>
          {this.state.value}
        </Typography>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  smsCount: state.smsCount,
  showPricing: state.CountryReducer.showPricing
})

const StepSliderD = withStyles(styles, { withTheme: true })(
  StepSlider);

export default connect(
  mapStateToProps)(StepSliderD);
