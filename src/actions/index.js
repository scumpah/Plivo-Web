import { createAction } from 'redux-act';
import axios from 'axios';


export const togglePricing = createAction('SHOW_PRICING',
  (showPricing) => ({ showPricing })
);

export const storeCountry = createAction('STORE_COUNTRY',
  (countryCode) => ({ countryCode })
);

export const storeSMSCount = createAction('STORE_SMS_COUNT',
  (smsCount) => ({ smsCount })
);

export const storesmsData = createAction('STORE_SMS_DATA',
  (smsData) => ({ smsData })
);

export const storeSMSType = createAction('STORE_SMS_TYPE',
  (smsType) => ({ smsType })
);

function getSMSType(smsTypeObj) {
  if(!smsTypeObj.smsType) {
    return 'both';
  } else {
    switch(smsTypeObj.smsType) {
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

export function calculatePricing(functype) {
  return (dispatch, getState) => {
    const state = getState();
    const showPricing = state.CountryReducer.showPricing;
    const body = {
      "numberTypeCode": "PHN",
      "countryCode": state.CountryReducer.countryCode,
      "smsType": getSMSType(state.SMSTypeReducer),
      "number": state.SMSCountReducer.smsCount
        }
        axios.post('http://localhost:4000/api/pricing/calculatepricing', body)
        .then(response => {
            dispatch(storesmsData(response.data));
            if(functype === 'range') {
              dispatch(togglePricing(showPricing));
            } else {
            dispatch(togglePricing(true));
            }
            if(!state.SMSTypeReducer.smsType) {
            dispatch(storeSMSType(0));
            }
          })
  };
}

