import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';	
import axios from 'axios';
import * as TogglePricingAction from '../actions/index';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Countries extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
    countries: [{
        "countryName": "United States",
        "countryCode": "US",
        "currencyType": "$",
    }],
    countryCode: '',
    countryName: '',
  };

  componentDidMount() {
    axios.get('http://localhost:4000/api/country').then(countries => 
        {
        this.setState({countries: countries.data});
        if(countries.data.length > 0) {
        this.setState({ countryCode: countries.data[0].countryCode });
        this.props.dispatch(TogglePricingAction.storeCountry(countries.data[0].countryCode));
        this.props.dispatch(TogglePricingAction.togglePricing(false));
        }
      })
  }

  handleChange = value => {
    this.setState({ countryCode: value });
    this.props.dispatch(TogglePricingAction.togglePricing(false));
    this.props.dispatch(TogglePricingAction.storeCountry(value));
  };

  render() {
    return (
          <SelectField
            value={this.state.countryCode}
            onChange={(evt, index, value) => this.handleChange(value)}
            style={{width: '200px'}}
          >
          {this.state.countries.map(country => (
            <MenuItem primaryText={country.countryName} value={country.countryCode} />
          ))}
          </SelectField>

    );
  }
}
const mapStateToProps = state => ({
    dispatch: PropTypes.func,
    showPricing: state.CountryReducer.showPricing,
    classes: PropTypes.object.isRequired,
  })
  
  const CountriesD = withStyles(styles, { withTheme: true })(
    Countries);
  
  export default connect(
    mapStateToProps)(CountriesD);
