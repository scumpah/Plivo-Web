import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function calculate() {
    axios.post('http://localhost:3000/api/pricing/calculatepricing')
    .then(response => 
        this.setState({response}
        ))
};
// class StepSlider extends React.Component {
//     state = {
//         value: 200,
//       };
 function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}
      onClick={() => { this.calculate(); }}>
        Calculate
      </Button>
    </div>
  );
}
}


ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);