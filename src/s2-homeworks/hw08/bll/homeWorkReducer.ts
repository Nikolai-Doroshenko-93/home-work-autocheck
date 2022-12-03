import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let copyState=[...state]
            action.payload === 'up'
                ? copyState = [...state].sort((a, b)=>(a.age>(b.age)?-1:1))
                : copyState = [...state].sort((a, b)=>(a.age>(b.age)?1:-1))
            return copyState

        }
        case 'check': {
            let copyState=[...state]
            copyState = [...state].filter((a)=>(a.age>=18))
            return copyState // need to fix
        }
        default:
            return state
    }
}
