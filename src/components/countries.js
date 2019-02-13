import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from 'material-ui/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import SelectField from 'material-ui/SelectField';	
import axios from 'axios';

import { showPricing } from '../actions';

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

class SimpleSelect extends React.Component {
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
    axios.get('http://localhost:3000/api/country')
    .then(countries => 
        this.setState({countries}
        ))
  }

  handleChange = value => {
    this.setState({ countryCode: value });
    this.state.countries.forEach(country => {
        if(country.countryCode === value)
        this.setState({countryName: country.countryName});
    });
  };

  render() {
    const { classes } = this.props;

    return (
          <SelectField
            value={this.state.countryName}
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
    showPricing: state.showPricing,
    classes: PropTypes.object.isRequired,
  })
  
  const mapDispatchToProps = dispatch => ({
    showPricing: value => dispatch(showPricing(value))
  })
  
  const SimpleSelectD = withStyles(styles, { withTheme: true })(
    SimpleSelect);
  
  export default connect(
    mapStateToProps, mapDispatchToProps)(SimpleSelectD);

//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(withStyles(styles(SimpleSelect)));