import { createReducer } from 'redux-act';
import * as StoreSMSData from '../actions';

export default createReducer({
  [StoreSMSData.storesmsData]: (state, action) => {
    const smsData = action.smsData;
    const result = Object.assign({ }, state, { smsData });
    return result;
  },
}, {});