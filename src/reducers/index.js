import { combineReducers } from 'redux'
import CountryReducer from './showPricing'
import SMSCountReducer from './smsCount'
import SMSDataReducer from './smsData'
import SMSTypeReducer from './smsType'




export default combineReducers({
    CountryReducer,
    SMSCountReducer,
    SMSDataReducer,
    SMSTypeReducer
})