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

    useEffect(() => {
        FetchList(setFilmSearch, inputValue)
    }, [inputValue])

    // Open or close the Search Menu by change is class, using the SearchBtn active or not.
    if (SearchBtn) {
        if (classSearchBox !== 'search-box show') {
            setClassSearchBox('search-box show')
        }
    } else if (classSearchBox !== 'search-box') {
        setClassSearchBox('search-box')
    }

    // Store the input value to show
    function handleInput(e) {
        const newSearch = e.target.value
        setInputValue(newSearch)
    }
    
    // Reset the search input, and close the search menu when result is clicked
    function searchReset() {
        setInputValue('')
        toggleSearchBtn()
    }

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
