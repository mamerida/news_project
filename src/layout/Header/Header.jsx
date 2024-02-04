import React, { useCallback, useState } from 'react';
import newsPaperlogo from '../../../public/newsPaper.svg';
import './header.css';
import { CustomSelect } from '../../components/CustomSelect/CustomSelect';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import { FaSearch } from "react-icons/fa";

const endpointOptions = [
    {value:"everything", label:"Everything"},
    {value:"top-headlines", label:"Top headlines"},
]
const ENDPOINT_NAME = "endpoint"

export const Header = () => {
    const [optionsToSeach, setOptionsToSeach] = useState({endpoint:"everything",word:""})

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
        <header className='header'>
            <img src={newsPaperlogo} alt='logo' className='header_logo'/>
            <h1 className='header_title'>What's New?</h1>
            <form>
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
                />
            </form>
        </header>
    )
}
