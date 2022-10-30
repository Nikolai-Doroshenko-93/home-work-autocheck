import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'


type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: any, setError: any, setName: any, addUserCallback: any) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name === '' || name[0] === ' ') {
        alert('error')
    } else {
        addUserCallback(name)
        setName('')
    }
}

export const pureOnBlur = (name: any, setError: any) => {
    // если имя пустое - показать ошибку
    if (name === '') {
        setError('error')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => { // если нажата кнопка Enter - добавить
    if(e.keyCode === 13) {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        if(e.currentTarget.value === '' ||  e.currentTarget.value.trim() === '' || e.currentTarget.value[0] === ' ') {
            setName(e.currentTarget.value)
            setError('error')
        } else {
            setName(e.currentTarget.value)
            setError('')
        }

         // need to fix+


    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
        totalUsers = totalUsers + 1
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    let totalUsers = 0 // need to fix
    let lastUserName
    if (users.length === 0) {
        lastUserName = ''
    } else {
        lastUserName = users[users.length-1].name
    }
    // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
