import React from 'react'
import {AffairType} from "./HW2";
import cl from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => (props.deleteAffairCallback(id))// need to fix
    return (
        <div className={cl.container}>
            <div>{props.affair.name} </div>
            <div className={cl[props.affair.priority]}> {props.affair.priority} </div>
            <button onClick={() => deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
