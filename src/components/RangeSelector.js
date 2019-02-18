import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import * as StoreSMSCount from '../actions/index';


const styles = {
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
};

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
    this.props.dispatch(StoreSMSCount.calculatePricing());
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          min={0}
          max={2000}
          step={100}
          onChange={this.handleChange}
        />
        <Typography variant="h5" component="h3">
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
})

const StepSliderD = withStyles(styles, { withTheme: true })(
  StepSlider);

export default connect(
  mapStateToProps)(StepSliderD);
