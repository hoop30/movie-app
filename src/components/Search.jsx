import React, { useState, useEffect, useContext } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { FetchList } from '../libs/Omdb'
import { SearchResponse } from './SearchResponse'
import { SearchBtnContext } from '../context/SearchBtnContext'

export function Search() {

    const {SearchBtn, toggleSearchBtn} = useContext(SearchBtnContext)
    const [filmSearch, setFilmSearch] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [classSearchBox, setClassSearchBox] = useState('search-box')

    if (SearchBtn) {
        if (classSearchBox !== 'search-box show') {
            setClassSearchBox('search-box show')
        }
    } else if (classSearchBox !== 'search-box') {
        setClassSearchBox('search-box')
    }

    function handleInput(e) {
        const newSearch = e.target.value
        setInputValue(newSearch)
    }
    
    function searchReset() {
        setInputValue('')
        toggleSearchBtn()
    }

    useEffect(() => {
        FetchList(setFilmSearch, inputValue)
    }, [inputValue])

    return (
        <div className={classSearchBox} id='search'>
            <div className='input'>
                <input id='searchInput' type="text" placeholder='Movie name...' onChange={handleInput} value={inputValue}/>
                <button>
                    <RiSearch2Line size="1.8em" />
                </button>
            </div>
            <SearchResponse response={filmSearch} searchReset={searchReset}/>
        </div>
    )
}
