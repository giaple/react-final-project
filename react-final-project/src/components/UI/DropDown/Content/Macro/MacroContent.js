import React from 'react';

import classes from './Content.module.css';
import { useContextValue } from '../../../../../Contexts/MacroContext';

const Content = (props) => {

    let contentsClasses = [classes.Contents, "flex"].join(' ');
    const [state, dispatch] = useContextValue();

    if (state.isExpand) {
        contentsClasses = [classes.Contents, classes.expand, "flex"].join(' ');
    }

    return (
        <div className={contentsClasses}>
            {state.profiles.map((item, index) => {
                return (
                    <div key={item.name}
                        className={classes.Content}
                        onClick={() => dispatch({ type: 'selectedProfile', index: index })}
                    >{item.name}</div>
                )
            })}
        </div>
    )
}

export default Content;