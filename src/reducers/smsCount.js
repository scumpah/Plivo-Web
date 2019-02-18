import { createReducer } from 'redux-act';
import * as StoreSMSCount from '../actions';

export default createReducer({
  [StoreSMSCount.storeSMSCount]: (state, action) => {
    const smsCount = action.smsCount;
    const result = Object.assign({ }, state, { smsCount });
    return result;
  },
}, {});