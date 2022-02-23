import {UserType} from "../HW8";

type PayloadType = 'up' | 'down';

export type SortActionType = {
    type: 'sort'
    payload: PayloadType
}
export type CheckActionType = {
    type: 'check'
    payload: number
}

type ActionType = SortActionType | CheckActionType

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case "down":
                    let copyState = [...state]
                    return copyState.sort((a, b) => a.name > b.name ? -1 : 1)
                case "up":
                    let copyState1 = [...state]
                    return copyState1.sort((a, b) => a.name > b.name ? 1 : -1)
                default:
                    return state
            }
        }
        case 'check': {
            // need to fix
            return state.filter(a => a.age > action.payload)
        }
        default:
            return state
    }
}


export const SortAC = (value: PayloadType): SortActionType => {
    return {
        type: 'sort',
        payload: value
    }
}

export const checkAC = (age: number): CheckActionType => {
    return {
        type: 'check',
        payload: age
    }
}