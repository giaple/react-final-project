import React from 'react';

import Macro from '../../components/UI/DropDown/Macro/Macro';
import Action from '../../components/UI/DropDown/Action/Action';

import classes from './ProfileBar.module.css';

const ProfileBar = (props) => {

    return (
        <div className={classes.ProfileBar + " flex" }>
            <div>Profile</div>
            <Macro />
            <Action />
            <div className={classes.divider}/>
            <div className={classes.button}>New Macro</div>
        </div>
    )
}

export default ProfileBar;