import React from 'react';

import classes from './LeftSide.module.css';

const LeftSide = (props) => {
    return (
        <div className={classes.LeftSide}>
            <div className={classes.item + " flex"}>
                ADD
            </div>
            <div className={classes.item + " flex"}>
                <div className={[classes.icon, classes.delay].join(' ')}></div>
                delay

            </div>
            <div className={classes.item + " flex"}>
                <div className={[classes.icon, classes.keyboard].join(' ')}></div>
                keyboard function
            </div>
            <div className={classes.item + " flex"}>
                <div className={[classes.icon, classes.mouse].join(' ')}></div>
                mouse function
            </div>
            <div className={classes.item + " flex"}>
                <div className={[classes.icon, classes.macro].join(' ')}></div>
                macro
            </div>
            <div className={classes.item + " flex"}>
                <div className={[classes.icon, classes.switch].join(' ')}></div>
                switch device profile
            </div>
            <div className={classes.item + " flex"}>
                <div className={[classes.icon, classes['switch_light']].join(' ')}></div>
                switch lighting
            </div>
            <div className={classes.item + " flex"}>
                <div className={[classes.icon, classes.launch].join(' ')}></div>
                launch
            </div>
            <div className={classes.item + " flex"}>
                <div className={[classes.icon, classes.console].join(' ')}></div>
                run command
            </div>
            <div className={classes.item + " flex"}>
                <div className={[classes.icon, classes.multimedia].join(' ')}></div>
                multimedia
            </div>
            <div className={classes.item + " flex"}>
                <div className={[classes.icon, classes['text_function']].join(' ')}></div>
                text function
            </div>
            <div className={classes.item + " flex"}>
                <div className={[classes.icon, classes.loop].join(' ')}></div>
                loop
            </div>
        </div>
    );
}

export default LeftSide;