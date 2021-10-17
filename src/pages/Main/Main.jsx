import React from 'react'
import ArrowDown from '../../components/ArrowDown'
import ArrowUp from '../../components/ArrowUp'
import classes from './Main.module.css'

const Main = () => {
    return (
        <div className={classes.main} >
            <div className="container">
                <div className={classes.mainInner}>

                    <div className={classes.mainImg}>
                        <img src="http://st-1.akipress.org/st_runews//.storage/runews18/images/.thumbs/999b01d9ba772a4d931d34c25191f1ad_0_500_0.jpg" alt="" />
                    </div>
                    <div className={classes.mainText}>
                        <h1>Кандидат Жогорку Кеңеша</h1>
                        <h2>Керимкулов Нурлан <br /> Бейшенбекович</h2>
                    </div>
                    <ArrowUp />
                </div>
            </div>
        </div>
    )
}

export default Main
