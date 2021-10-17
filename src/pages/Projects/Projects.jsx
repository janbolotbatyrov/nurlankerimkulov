import React from 'react'
import classes from './Projects.module.css'
import ArrowDown from '../../components/ArrowDown'
import cn from 'classnames'


const Projects = () => {
    
    return (
        <div className={cn(classes.projects)} id="projects">
            <div className="container">
                <div className={classes.projectsInner} >
                    <h1>Что он сделал?</h1>
                    <br />
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Projects
