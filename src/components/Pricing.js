import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MessagesInfoView from './MessagesInfoView';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function renderBoth(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
        </Typography>
        <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
        <MessagesInfoView
        countryCode={props.smsData.length > 0 && props.smsData[0].countryCode}
        price={props.smsData.length > 0  && props.smsData[0].outboundSmsPrice}
        text='Send' value={props.value}/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <MessagesInfoView
                countryCode={props.smsData.length > 0  && props.smsData[0].countryCode}
        price={props.smsData && props.smsData.length > 0  && props.smsData[0].inboundSmsPrice}
        text='Recieve' value={props.value}/>
        </Grid>
        </Grid>
      </Paper>
    </div>
  );
}function renderInbound(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
        </Typography>
        <Grid container spacing={24}>
        <Grid item xs={24} sm={12}>
        <MessagesInfoView
        countryCode={props.smsData.length > 0  && props.smsData[0].countryCode}
        price={props.smsData.length > 0  && props.smsData[0].inboundSmsPrice}
        text='Recieve' value={props.value}/>
        </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
function renderOutbound(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
        </Typography>
        <Grid container spacing={24}>
        <Grid item xs={24} sm={12}>
        <MessagesInfoView
        countryCode={props.smsData.length > 0  && props.smsData[0].countryCode}
        price={props.smsData.length > 0  && props.smsData[0].outboundSmsPrice}
        text='Send' value={props.value} />
        </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
class PaperSheet extends React.Component {
  render() {
    const props = this.props;
    if(props.value === 0) {
      return renderBoth(props);
    } else if(props.value === 1){
      return renderInbound(props);
    } else{
      return renderOutbound(props);
    }
}
}

const mapStateToProps = state => ({
  classes: PropTypes.object.isRequired,
  smsData: state.SMSDataReducer.smsData,
  value: state.SMSTypeReducer.smsType,
})

const PaperSheetD = withStyles(styles, { withTheme: true })(
  PaperSheet);

export default connect(
  mapStateToProps)(PaperSheetD);
