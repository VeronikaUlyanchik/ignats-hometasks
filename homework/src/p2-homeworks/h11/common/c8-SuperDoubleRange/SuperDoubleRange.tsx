import React, {ChangeEvent, ChangeEventHandler, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
import {Box, Slider} from "@material-ui/core";
import s from './SuperDoubleRange.module.css'


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: number[]
    min?: number
    max?: number
    step?: number
    // min, max, step, disable, ...
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step,  ...props
    }
) => {
    const [disabled, setDisabled] = useState<boolean>(false)
    // сделать самому, можно подключать библиотеки
    const onChangeRangeHandler = (e: ChangeEvent<{}>, value: number | number[]) => {
        if (!Array.isArray(value)) {
            return
        }
        if (value[0]>=value[1]) {
            setDisabled(true)
        } else {
            onChangeRange && onChangeRange(value)
            setDisabled(false)
        }
    }

    function valuetext(value: number) {
        return `${value}`;
    }

    return (
        <div className={s.range}>
            <Box sx={{width: 300}}>
                <Slider
                    valueLabelDisplay="auto"
                    step={step ? step : 1}
                    min={min ? min : 0}
                    max={max ? max : 100}
                    onChange={onChangeRangeHandler}
                    disabled={disabled}
                    aria-labelledby="range-slider"
                    value={value ? value : [min ? min : 0, max ? max : 100]}
                    getAriaValueText={valuetext}
                />
            </Box>
        </div>
    )
}

export default SuperDoubleRange
