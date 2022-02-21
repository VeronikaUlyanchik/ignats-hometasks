import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, SelectHTMLAttributes,} from 'react'

type DefaultSelectProps = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type AlternativeSuperSelectProps = DefaultSelectProps &{
    value: string
    options: Array<string>
    onChangeOption : (option: string)=> void
}

function AlternativeSuperSelect({value, options,onChangeOption, onChange,...restProps}: AlternativeSuperSelectProps) {

    const onChangeCallback =(e: ChangeEvent<HTMLSelectElement>) =>{
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }
    const mappedOptions = options ? options.map((i,index) => <option key={i+'-'+index}>{i}</option>) : []
    return (
        <select
            name={value}
            onChange={onChangeCallback}
            value={value}
        >
            {mappedOptions}
        </select>
    )
}

export default AlternativeSuperSelect
