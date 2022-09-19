import React from 'react'
import { BiDownvote } from 'react-icons/bi'
import gmail from '../../../assets/logo/gmail.png'
import linkedin from '../../../assets/logo/linkedin.png'
import malt from '../../../assets/logo/malt.png'

export function Contact() {

    function show(e) {
        e.target.classList.add('hide')
    }

    function hide(e) {
        const btn = document.querySelector('.btn-Contact')
        btn.classList.remove('hide')
    }

    return (
        <div className='contact'>
            <div className='contact-img'></div>
            <h2>GRANIER Kévin</h2>
            <p>Ce projet a été realiser avec React et l'api Omdb. si ce projet vous a plus n'etister plus contacter moi!<BiDownvote /></p>
            
            <div className='links' href="https://www.kevin-granier.fr/" target="_blank" onMouseLeave={hide}>
                <button className='btn-Contact' onClick={show} >Contact</button>
                <div className='logo'>
                    <a href="https://www.kevin-granier.fr/#contact" target="_blank">
                        <img src={gmail} alt="gmail" />
                    </a>
                    <span className='separation'></span>
                    <a href="https://www.linkedin.com/in/kevin-granier-207487221" target="_blank">
                        <img src={linkedin} alt="linkedin" />
                    </a>
                    <span className='separation'></span>
                    <a href="https://www.malt.fr/profile/kevingranier" target="_blank">
                        <img src={malt} alt="malt" />
                    </a>
                </div>
            </div>
        </div>
    )
}
