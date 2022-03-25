import {SET_THEME} from "../../h10/bll/store";

const initState = {
    theme: 'dark'
};

export const themeReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case "SET_THEME": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string): changeThemeCType => {
    return {
        type: SET_THEME,
        theme: theme
    }
}; // fix any

type changeThemeCType = {
    type: 'SET_THEME'
    theme : string
};
