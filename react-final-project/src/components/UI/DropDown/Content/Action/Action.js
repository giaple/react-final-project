import React from 'react';

import classes from './Action.module.css';
import { useContextValue } from '../../../../../Contexts/MacroContext';

const ActionList = (props) => {

    const [,dispatch] = useContextValue();

    let expand = classes["profile-act"];
    if(props.isExpand){
        expand = [classes["profile-act"],classes.show].join(' ');
    }

    return (
        <div className={expand} id="profileMenu">
            <div className={classes.action}>add</div>
            <div className={classes.action}>import</div>
            <div className={classes.divider}></div>
            <div className={classes.action}>rename</div>
            <div className={classes.action} onClick = {() => dispatch({type: 'duplicate'})}>duplicate</div>
            <div className={classes.action}>export</div>
            <div className={classes.divider}></div>
            <div className={classes.action} id="deleteAction" onClick= {() => dispatch({type: 'deleting'})}>delete</div>
        </div>
    );
}

export default ActionList;