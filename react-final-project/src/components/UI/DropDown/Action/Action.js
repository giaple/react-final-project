import React from 'react';

import classes from './Action.module.css';

const Action = (props) => {

    return (
        <div className={[classes.Action, classes["hover-border"]].join(' ')}>

        </div>
    )
}

export default Action;