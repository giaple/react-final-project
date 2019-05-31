import React,{useState} from 'react';

import classes from './Action.module.css';
import ActionList from '../Content/Action/Action';

const Action = (props) => {
    const [isExpand,setExpend] = useState(false);

    const onClickHanlder = () => {
        setExpend(!isExpand);
    }

    return (
        <div className={[classes.Action, classes["hover-border"]].join(' ')} onClick={onClickHanlder}>
            <ActionList isExpand={isExpand}/>
        </div>
    )
}

export default Action;