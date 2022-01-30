import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    addUserKeyHandler: (e:KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, addUserKeyHandler} // деструктуризация пропсов
) => {
    const inputClass = (error) ? s.error : s.noError; // need to fix with (?:)

    return (
        <div className={s.container}>
            <SuperInputText value={name} onChange={setNameCallback} onKeyPress={addUserKeyHandler} className={inputClass}/>
            <SuperButton onClick={addUser} className={s.btnAdd}>add</SuperButton>
            <span className={s.totalUsers}>{totalUsers}</span>
            <div className={s.errorSpan}>{error}</div>
        </div>
    )
}

export default Greeting
