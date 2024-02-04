import React, { useCallback, useMemo, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { LiaFilterSolid } from "react-icons/lia";
import { CustomSelect } from '../../../components/CustomSelect/CustomSelect';
import { CustomInput } from '../../../components/CustomInput/CustomInput';
import './NewsForm.css';
import { CustomButton } from '../../../components/CustomButton/CustomButton';

const EVERYTHING_OPTION = "everything"
const endpointOptions = [
    {value:EVERYTHING_OPTION, label:"Everything"},
    {value:"top-headlines", label:"Top headlines"},
]
const ENDPOINT_NAME = "endpoint"

export const NewsForm = () => {
    const [optionsToSeach, setOptionsToSeach] = useState({endpoint:EVERYTHING_OPTION ,word:""})

    const handleEndpointSelected = useCallback((option)=>{
        setOptionsToSeach((current)=>{
            return {...current, endpoint:option.target.value}
        })
    },[])

    const handleChangeWord = useCallback((option)=>{
        setOptionsToSeach((current)=>{
            return {...current, word:option.target.value}
        })
    },[])

    return (
        <form className='form_container'>
            <CustomSelect 
                options={endpointOptions}
                name={ENDPOINT_NAME}
                value={optionsToSeach.endpoint}
                onChange={handleEndpointSelected}
                emptyOption={false}
            />
            <CustomInput
                type="text"
                placeholder={"Find your next new!!"}
                value={optionsToSeach.word}
                onChange={handleChangeWord}
                name="word"
                icon={<FaSearch />}
            />
            <CustomButton icon={<LiaFilterSolid />} type="clear" />
            <CustomButton icon={<FaSearch />} type="secondary"  label="Search"/>
        </form>
    )
}
