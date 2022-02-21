import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'

type DefaultRadioType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> ;

type AlternativeSuperRadioType = DefaultRadioType & {
    value: string
    onChangeOption: (value: string) => void
    options: Array<string>
}

function AlternativeSuperRadio({value,onChangeOption, onChange, options,  ...restProps}: AlternativeSuperRadioType) {

    const onChangeCallback =(e: ChangeEvent<HTMLInputElement>) =>{
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const mappedOptions = options  ? options.map((i, index) =>  {
       return ( <label key={i+' ' +index}>
            <input type={'radio'} value={i} name={i} onChange={onChangeCallback} checked={i===value}/>
           {i}
        </label>)
    }) : [];
    return (
        <>
            {mappedOptions}
        </>
    )
}

export default AlternativeSuperRadio
