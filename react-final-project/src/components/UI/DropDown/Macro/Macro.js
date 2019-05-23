import React from 'react';

import classes from './Macro.module.css';
import Content from '../Content/Content';
const Macro = (props) => {

    return (
        <div className={classes.Macro}>
            <div className={classes.DropDown}>
                <div className={classes.Selected}>profile 5</div>
                <div className={classes.icon +" "+ classes.expand}></div>
            </div>
            <Content/>
        </div>
    )
}

export default Macro;