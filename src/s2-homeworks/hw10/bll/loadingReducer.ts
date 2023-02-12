const initState: initType = {
    isLoading: false,
}
type initType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: LoadingActionType): initType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}
export type StatePropsType = {
    isLoading: boolean
}
type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
}) as const
