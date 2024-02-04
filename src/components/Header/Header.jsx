import React, { useCallback, useState } from 'react';
import newsPaperlogo from '../../../public/newsPaper.svg';
import './header.css';
import { CustomSelect } from '../CustomSelect/CustomSelect';

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
            </form>
        </header>
    )
}
