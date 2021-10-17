import React from 'react'
import classes from './Home.module.css'
import Main from '../Main/Main'
import Projects from '../Projects/Projects'
import Program from '../Program/Program'
import Reviews from '../Reviews/Reviews'

const Home = () => {
    return (
        <div >
            <Main />
            <Projects />
            <Program />
            <Reviews />
        </div>
    )
}

export default Home
