import React from 'react'
import Logo from '../../components/Logo'
import classes from './Header.module.css'

const Header = () => {
    const scrollMain = () => {
        window.scrollTo(0, 0)
    }
    const scrollProjects = () => {
        window.scrollTo(0, 620)
    }
    const scrollProgram = () => {
        window.scrollTo(0, 1280)
    }
    const scrollReviews = () => {
        window.scrollTo(0, 1800)
    }
    return (
        <>
            <div id='main' className={classes.head}></div>
            <div className={classes.header}>
                <div className="container">
                    <div className={classes.headerInner}>
                        <div className="logo">
                            <Logo />
                        </div>
                        <ul className="nav">
                            <li onClick={() => scrollMain()}>
                                Главная
                            </li>
                            <li onClick={() => scrollProjects()}>
                                Что он сделал?
                            </li>
                            <li onClick={() => scrollProgram()}>
                                Моя программа
                            </li>
                            <li onClick={() => scrollReviews()}>
                                Отзывы
                            </li>
                        </ul>
                    </div>
                </div>
            </div></>
    )
}

export default Header
