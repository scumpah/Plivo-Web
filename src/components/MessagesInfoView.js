import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import axios from 'axios';

const styles = {
    card: {
      minWidth: 100,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
};

class MessagesInfoView extends Component {
    state={
        currency: this.getCountryDetails(this.props.countryCode)
    }

    componentWillReceiveProps(nextProps, props) {
        if(nextProps.countryCode !== props.countryCode) {
            this.getCountryDetails(nextProps.countryCode)
        }
    }
    getCountryDetails(code) {
        axios.get('http://localhost:4000/api/country/' + code).then(countries => 
            {
            this.setState({currency: countries.data.currencyType});
          })
      }
    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom component="p">
                        
                                {this.props.text} messages at
                        
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom component="h2">
                        {this.state.currency}{this.props.price}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom component="p">
                        estimated cost
                    </Typography>
                    <Typography component="div">
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

MessagesInfoView.propTypes = {
    text: PropTypes.string,
    price: PropTypes.number,
    countryCode: PropTypes.string,
    value: PropTypes.number,
  };
export default withStyles(styles)(MessagesInfoView)