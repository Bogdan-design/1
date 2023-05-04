import React from 'react';
import s from './Button.module.css'

type PropsType ={
    disabled: boolean
    name: string
    callBack: ()=>void
}

export const Button : React.FC<PropsType> = (props) => {

    const onClickHandler = ()=>{
        props.callBack()
    }

    return (
        <div>
            <button className={s.button} disabled={props.disabled} onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

