import React, {ChangeEvent} from 'react';
import s from './InputValues.module.css'


type PropsType = {
    name:string
    value: number
    callBack: (e:ChangeEvent<HTMLInputElement>) => void
}

export const InputValues = (props: PropsType) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        props.callBack(e)
    }

    return (
        <div>
            {props.name}
            <input  className={s.input}
                type="number"
                value={props.value}
                onChange={onChangeHandler}
            />
        </div>
    );
};

