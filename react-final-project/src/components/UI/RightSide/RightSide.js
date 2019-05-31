import React from 'react';

import classes from './RightSide.module.css';
import { useContextValue } from '../../../Contexts/MacroContext';

const RightSide = (props) => {
    const [state, dispatch] = useContextValue();

    const profileItems = state.profiles[state.display].profile;

    for (let item in profileItems) {
        switch (profileItems[item].name) {
            case 'delay':
                profileItems[item].type = classes.delay;
                break;
            case 'keyboard':
                profileItems[item].type = classes.keyboard;
                break;
            case 'mouse':
                profileItems[item].type = classes.mouse;
                break;
            case 'macro':
                profileItems[item].type = classes.macro;
                break;
            case 'switch':
                profileItems[item].type = classes.switch;
                break;
            case 'switch light':
                profileItems[item].type = classes.switch_light;
                break;
            case 'launch':
                profileItems[item].type = classes.launch;
                break;
            case 'console':
                profileItems[item].type = classes.console;
                break;
            case 'multimedia':
                profileItems[item].type = classes.multimedia;
                break;
            case 'text function':
                profileItems[item].type = classes['text_function'];
                break;
            case 'loop':
                profileItems[item].type = classes.loop;
                break;
        }
    }

    return (
        <div className={classes.RightSide} id={classes['style-1']}>

            {profileItems.map((item, index) => (
                <div key={index} className={classes.item + " flex"}>
                    <div className={classes["check-item"]}>
                        <input type="checkbox" id={"checkNorm"+ index} /><label  htmlFor={"checkNorm"+ index} className={classes["check-box"]}></label>
                    </div>
                    <div className={[classes.icon, item.type].join(' ')}></div>
                    {item.name}
                </div>
            )
            )}
        </div>
    )
}

export default RightSide;