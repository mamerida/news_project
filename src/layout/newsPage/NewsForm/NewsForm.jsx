import React, { useCallback, useMemo, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { LiaFilterSolid } from "react-icons/lia";
import { Select } from '../../../components/Select/Select';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import './NewsForm.css';

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
            <Select 
                options={endpointOptions}
                name={ENDPOINT_NAME}
                value={optionsToSeach.endpoint}
                onChange={handleEndpointSelected}
                emptyOption={false}
            />
            <Input
                type="text"
                placeholder={"Find your next new!!"}
                value={optionsToSeach.word}
                onChange={handleChangeWord}
                name="word"
                icon={<FaSearch />}
            />
            <Button icon={<LiaFilterSolid />} type="clear" />
            <Button icon={<FaSearch />} type="secondary"  label="Search"/>
        </form>
    )
}
