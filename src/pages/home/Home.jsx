import React from 'react'
import { Heading } from './components/Heading'
import { List } from './components/List'
import { Contact } from './components/Contact'

export function Home() {

    return (
        <div>
            <header>
                <Heading />
            </header>
            <main>
                <List name="Marvel"/>
                <List name="Star wars"/>
                <Contact />
            </main>
        </div>
    )
}
