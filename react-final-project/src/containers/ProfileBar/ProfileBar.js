import React from 'react';

import Macro from '../../components/UI/DropDown/Macro/Macro';
import Action from '../../components/UI/DropDown/Action/Action';
import { useContextValue } from '../../Contexts/MacroContext';

import classes from './ProfileBar.module.css';

const ProfileBar = (props) => {
    const [state, dispatch] = useContextValue();
    let alertClass = ["flex",classes.alert,classes["profile-del"]].join(' ');
    if(state.isDeleting){
        alertClass = ["flex",classes.alert,classes["profile-del"],classes.show].join(' ');
    }

    return (

        <div className={classes.ProfileBar + " " + classes.flex + " flex"}>
            <div>Macro</div>
            <Macro />
            <Action />
            <div className={classes.divider} />
            <div className={classes.button} onClick={() => dispatch({ type: 'Add' })}>New Macro</div>
            <div id="deleteAlert" className={alertClass}>
                <div className={classes["title"]}>delete profile</div>
                <div className={[classes["body-text"],classes[" t-center"]].join(' ')}>
                    You're about to delete this profile. All bindings in this profile will be deleted.
						</div>
                <div className={classes["thx-btn"] } onClick = {() => dispatch({type: 'deleteConfirmation'})} id="deleteConfirm">delete</div>
            </div>
        </div>

    )
}

export default ProfileBar;