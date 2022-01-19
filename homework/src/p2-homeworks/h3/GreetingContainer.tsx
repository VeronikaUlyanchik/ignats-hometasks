import React, {ChangeEvent, KeyboardEvent, KeyboardEventHandler, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {// need to fix any
        setName(e.currentTarget.value)// need to fix
    };
    const addUser = () => {
        if (name.trim()) {
            alert(`Hello, ${name.trim()} !`)
            addUserCallback(name.trim())
            setName('')
            setError('')
        } else {
            setError("error: input shouldn't be empty")
            setName('')
        }
    };

    const addUserKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    };

    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            addUserKeyHandler={addUserKeyHandler}
        />
    )
};

export default GreetingContainer
