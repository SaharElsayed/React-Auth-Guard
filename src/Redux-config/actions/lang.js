import * as types from './types';

export const setCurrentLang = lang => dispatch => {
    localStorage.setItem('lang', lang);

    dispatch({ type: types.SET_CURRENT_LANG, lang: lang });
}

export const getCurrentLang = () => dispatch => {
    dispatch({ type: types.GET_CURRENT_LANG });
};