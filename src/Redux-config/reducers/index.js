import { combineReducers } from 'redux';

import localeReducer from './localeReducer';

export default combineReducers({
    locale: localeReducer
});