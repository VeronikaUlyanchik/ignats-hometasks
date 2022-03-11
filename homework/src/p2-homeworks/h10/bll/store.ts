import {combineReducers, createStore} from 'redux'
import {loadingReducer} from './loadingReducer'

export const SET_LOADING = "SET_LOADING";

const reducers = combineReducers({
    loading: loadingReducer,

})

const store = createStore(reducers)

export default store;

export type AppStoreType = ReturnType<typeof reducers>

export const setLoadingAC = ()=> {
    return {
        type: SET_LOADING
    }
}

type setLoadingACType = ReturnType<typeof setLoadingAC>
// @ts-ignore
window.store = store // for dev
