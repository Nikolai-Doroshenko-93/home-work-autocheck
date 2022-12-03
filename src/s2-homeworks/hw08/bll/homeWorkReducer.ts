import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            action.payload === 'up'
                ? state = [...state].sort((a, b)=>(a.age>(b.age)?-1:1))
                : state = [...state].sort((a, b)=>(a.age>(b.age)?1:-1))
            return state

        }
        case 'check': {

            state = [...state].filter((a)=>(a.age>=18))
            return state // need to fix
        }
        default:
            return state
    }
}
