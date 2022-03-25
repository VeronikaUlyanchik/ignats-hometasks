import {combineReducers, createStore} from 'redux'
import {loadingReducer} from './loadingReducer'
import {themeReducer} from "../../h12/bll/themeReducer";

export const SET_LOADING = "SET_LOADING";
export const SET_THEME = "SET_THEME";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
})

const store = createStore(reducers);

export default store;

export type AppStoreType = ReturnType<typeof reducers>;

export const setLoadingAC = ()=> {
    return {
        type: SET_LOADING
    }
};

// export const setThemeAC = (theme: string)=> {
//     return {
//         type: SET_THEME,
//         theme: theme
//     }
// }

type setLoadingACType = ReturnType<typeof setLoadingAC>
// @ts-ignore
window.store = store // for dev
