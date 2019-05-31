import React from 'react';

import classes from './Macro.module.css';
import Content from '../Content/Macro/MacroContent';
import { useContextValue } from '../../../../Contexts/MacroContext';

const Macro = (props) => {


    const [state,dispatch] = useContextValue();

    return (
        <div className={classes.Macro}  >
            <div className={state.isExpand?[classes.DropDown,classes.expand].join(' '):classes.DropDown} onClick = {() => dispatch({type: 'expand'})}>
                <div className={classes.Selected}>{state.profiles[state.display].name}</div>
                <div className={classes.icon +" "+ classes.expand}></div>
            </div>
            <Content />
        </div>
    )
}

export default Macro;