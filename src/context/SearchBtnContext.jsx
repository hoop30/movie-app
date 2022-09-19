import React, { createContext, useState } from 'react'

export const SearchBtnContext = createContext()

const SearchBtnContextProvider = (props) => {

const [SearchBtn, setSearchBtn] = useState(false)

    const toggleSearchBtn = () => {
        setSearchBtn(!SearchBtn)
    }

    return (
        <SearchBtnContext.Provider value={{SearchBtn, toggleSearchBtn}}>
            {props.children}
        </SearchBtnContext.Provider>
    )
}

export default SearchBtnContextProvider

// Where it's used
/*
    import { useContext } from 'react'
    import { SearchBtnContext } from './    /SearchBtnContext'

    const {SearchBtn, toggleSearchBtn} = useContext(SearchBtnContext)

    onClick={toggleSearchBtn} className={SearchBtn ? "A" : "B"}
*/

// For parents
/*
    import SearchBtnContextProvider from './    /SearchBtnContext'

    <SearchBtnContextProvider>
        Children here
    </SearchBtnContextProvider>
*/