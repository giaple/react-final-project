import React, { useReducer, useContext } from 'react';

const MacroContext = React.createContext();
const initialMacro = {
    profiles: [{
        name: 'Macro 1',
        profile: [],
        isSelected: true
    }],
    display: 0,
    isExpand: false,
    isDeleting: false
};

const deepClone = (obj) => { return JSON.parse(JSON.stringify(obj)) };

const addItem = (state,item) => {

    const tempState = deepClone(state);

    tempState.profiles[tempState.display].profile.push(item);

    return tempState;
}

const selectedProfile = (state,index) => {
    const tempState = deepClone(state);
    tempState.display = index;
    tempState.isExpand = false;

    return tempState;
}

const expandProfiles = state => {
    const tempState = deepClone(state);
    tempState.isExpand = !tempState.isExpand ;

    return tempState;
}

const duplicateAction = state => {
    const tempState = deepClone(state);

    const item = tempState.profiles[tempState.display];

    const tempProfiles = tempState.profiles.concat(item);

    tempState.profiles = deepClone(tempProfiles);

    const name = tempState.profiles[tempState.display].name + ' duplicated';


    tempState.profiles[tempState.profiles.length-1].name = name;

    return tempState;
}

const deleteAction = state => {
    const tempState = deepClone(state);

    tempState.isDeleting = true;

    return tempState;
}

const deletedAction = state => {
    const tempState = deepClone(state);

    tempState.isDeleting = false;

    const index = tempState.display;

    tempState.profiles.splice(index,1);

    if(index !== 0){
        tempState.display = index - 1;
    }

    return tempState;
}

const macroReducer = (state, action) => {
    switch (action.type) {
        case 'Add':
            return {
                profiles: state.profiles.concat({
                    name: 'Macro ' + (state.profiles.length + 1),
                    profile: [],
                    isSelected: true
                }),
                display: state.profiles.length
            }
        case 'addItem': return addItem(state,action.item);
        case 'selectedProfile': return selectedProfile(state,action.index);
        case 'expand': return expandProfiles(state);
        case 'duplicate': return duplicateAction(state);
        case 'deleting': return deleteAction(state);
        case 'deleteConfirmation': return deletedAction(state);
        default:
            return state;
    }
}

const MacroField = props =>
    (<MacroContext.Provider value={useReducer(macroReducer, initialMacro)} >
        {props.children}
    </MacroContext.Provider>
    )



export default MacroField;

export const useContextValue = () => useContext(MacroContext);