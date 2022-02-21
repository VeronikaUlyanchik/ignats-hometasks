import React, {useState} from 'react'
import AlternativeSuperSelect from './common/c5-SuperSelect/AlternativeSuperSelect'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import AlternativeSuperRadio from "./common/c6-SuperRadio/AlternativeSuperRadio";

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[1])
    const [value2, onChangeOption2] = useState(arr[1])

    return (
        <div>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeSuperSelect value={value2}
            onChangeOption={onChangeOption2} options={arr}/>
            <AlternativeSuperRadio value={value2} onChangeOption={onChangeOption2}  options={arr} />
            <hr/>
        </div>
    )
}

export default HW7
