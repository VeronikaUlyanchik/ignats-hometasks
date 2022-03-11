import {SET_LOADING} from "./store";

const initState = {
    loading: false
}

export const loadingReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case SET_LOADING: {
            return {...state,
                loading: !state.loading}
        }
        default: return state
    }
}

export const loadingAC = (): any => {} // fix any