const initState = {
    themeId: 1,
}
export type InitStateType = {

}
export const themeReducer = (state = initState, action: ChangeThemeIdType): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }

        default:
            return state
    }
}

export type ChangeThemeIdType = {
    type: string,
    id: string
}
export const changeThemeId = (id: string): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
