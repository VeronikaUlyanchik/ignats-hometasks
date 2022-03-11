import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType, setLoadingAC} from "./bll/store";

function HW10() {
    const dispatch = useDispatch();
    const state = useSelector((store:AppStoreType)=> store.loading)

    const loading = false

    const setLoading = () => {
        dispatch(setLoadingAC())
        setTimeout(()=>dispatch(setLoadingAC()),2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {state.loading
                ? (
                    <div className="loader"></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
