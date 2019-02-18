import { createReducer } from 'redux-act';
import * as TogglePricing from '../actions';

export default createReducer({
  [TogglePricing.togglePricing]: (state, action) => {
    const showPricing = action.showPricing;
    const result = Object.assign({ }, state, { showPricing });
    return result;
  },
  [TogglePricing.storeCountry]: (state, action) => {
    const countryCode = action.countryCode;
    const result = Object.assign({ }, state, { countryCode });
    return result;
  },
}, {});