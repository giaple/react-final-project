import React from 'react';

import classes from './Content.module.css';

const Content = (props) => {

    return (
        <div className={classes.Contents + " flex"}>
            <div className={classes.Content}>default profile</div>
            <div className={classes.Content}>profile 2</div>
            <div className={classes.Content}>profile 3</div>
            <div className={classes.Content}>profile 4</div>
            <div className={classes.Content}>profile 5</div>
            <div className={classes.Content}>profile 6</div>
            <div className={classes.Content}>profile 7</div>
            <div className={classes.Content}>profile 8</div>
        </div>
    )
}

export default Content;