import React from 'react';

import classes from './LeftSide.module.css';
import { useContextValue } from '../../../Contexts/MacroContext';

const items = [
    {
        type: classes.delay,
        name: 'delay'
    },
    {
        type: classes.keyboard,
        name: 'keyboard'
    },
    {
        type: classes.mouse,
        name: 'mouse'
    },
    {
        type: classes.macro,
        name: 'macro'
    },
    {
        type: classes.switch,
        name: 'switch'
    },
    {
        type: classes.switch_light,
        name: 'switch light'
    },
    {
        type: classes.launch,
        name: 'launch'
    },
    {
        type: classes.console,
        name: 'console'
    },
    {
        type: classes.multimedia,
        name: 'multimedia'
    },
    {
        type: classes['text_function'],
        name: 'text function'
    },
    {
        type: classes.loop,
        name: 'loop'
    }
]

const LeftSide = (props) => {

    const [,dispatch] = useContextValue();

    return (
        <div className={classes.LeftSide}>
            <div className={"flex"}>
                ADD
            </div>
            {items.map(item => {
                return (
                    <div key={item.name}
                        className={classes.item + " flex"}
                        onClick={() => dispatch({type: 'addItem',item: {type: item.type,name: item.name}})}
                        >
                        <div className={[classes.icon, item.type].join(' ')}></div>
                        {item.name}

                    </div>
                )
            })}
        </div>
    );
}

export default LeftSide;