import { createReducer } from 'redux-act';
import * as StoreSMSType from '../actions';

export default createReducer({
  [StoreSMSType.storeSMSType]: (state, action) => {
    const smsType = action.smsType;
    const result = Object.assign({ }, state, { smsType });
    return result;
  },
}, {});