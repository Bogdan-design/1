import React from 'react';
import s from './Counter.module.css'

type CounterPropsType = {
    numMax: number
    numMin: number
    indicator: number
}


export const Counter: React.FC<CounterPropsType> = (props) => {
    const {numMax, numMin, indicator} = props

    return (
        <div className={indicator === numMax ? s.max : s.indicator}>
            {numMin > numMax ? <div>Incorrect value</div> : indicator}
        </div>
    );
};

