import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import * as storesmsData from '../actions/index';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class ContainedButtons extends React.Component {
  getSMSType() {
    if(!this.props.smsType) {
      return 'both';
    } else {
      switch(this.props.smsType) {
        case 0:
         return 'both';
        case 1:
        return 'inbound';
        case 2:
        return 'outbound';
        default:
        return 'both';
      }
    }
  }
  calculate(){
    const body = {
  "numberTypeCode": "PHN",
  "countryCode": this.props.countryCode,
  "smsType": this.getSMSType(),
  "number": this.props.smsCount
    }
    axios.post('http://localhost:4000/api/pricing/calculatepricing', body)
    .then(response => {
        this.props.dispatch(storesmsData.storesmsData(response.data));
        this.props.dispatch(storesmsData.togglePricing(true));
        if(!this.props.smsType) {
        this.props.dispatch(storesmsData.storeSMSType(0));
        }
      })
  };

  render() {
  const { classes } = this.props;
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}
      onClick={() => { this.props.dispatch(storesmsData.calculatePricing()); }}>
        Calculate
      </Button>
    </div>
  );
}
}
const mapStateToProps = state => ({
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  smsCount: state.SMSCountReducer.smsCount,
  countryCode: state.CountryReducer.countryCode,
  smsType: state.SMSTypeReducer.smsType
})

const ContainedButtonsD = withStyles(styles, { withTheme: true })(
  ContainedButtons);

export default connect(
  mapStateToProps)(ContainedButtonsD);
