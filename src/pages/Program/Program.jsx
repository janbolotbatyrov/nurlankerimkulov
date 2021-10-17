import React from 'react'
import classes from './Program.module.css'
import cn from 'classnames'


const Program = () => {

    return (
        <div className={classes.program}>
            <div className="container">
                <div className={cn(classes.programInner)} >
                    <h1>Моя программа</h1>
                </div>

            </div>
        </div>
    )
}

export default Program
