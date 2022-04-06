import React, {ChangeEvent, useState} from 'react';
import {API} from "./RequestsAPI ";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";

export const Request = () => {
    const [state, setState] = useState<boolean>(false);
    const [response, setResponse] = useState<string>('');
    const onClickHandler = () => {
        API.post(state).then((res) => {
            setResponse(res.data.errorText)
        }).catch((error) => {
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message);
            setResponse(error.response ? error.response.data.errorText : error.message);
        })
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setState(e.currentTarget.checked)
    }
    return (
        <>
            <SuperButton onClick={onClickHandler}>Нажми</SuperButton>
            <SuperCheckbox checked={state} onChange={onChangeHandler}/>
            <div>{response}</div>
        </>
    )
}