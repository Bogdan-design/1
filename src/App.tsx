import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./component/Counter";
import {Button} from "./component/Button";
import {InputValues} from "./component/InputValues";

export type ValuesType={
    numMax : number
    numMin : number
}

let newMaxValues: number
let newMinValues: number

const App = () => {
    const [values, setValues] = useState<ValuesType>(
        {
            numMax : 5,
            numMin : 0
        })
    const [indicator, setIndicator] = useState<number>(values.numMin)

    const incHandler = () => {
        if (indicator < values.numMax) {
            setIndicator(indicator + 1)
        }
    }

    const resetHandler = () => {
        setIndicator(values.numMin)

    }

    const onMaxChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
         newMaxValues = +e.currentTarget.value
        if(newMaxValues){
            setValues({...values,numMax:newMaxValues})
        }
    }

    const onMinChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        newMinValues = +e.currentTarget.value
        if(newMinValues){
            setValues({...values,numMin:newMinValues})
        }
    }

    const setHandler = ()=>{
        setIndicator(values.numMin)
    }

    // useEffect(()=>{
    //     localStorage.setItem('counterValue', JSON.stringify(value))
    // },[value])

    const disabledButtonAdd = indicator === values.numMax
    const disabledButtonReset = indicator === values.numMin
    const disabledInput = indicator === values.numMin

    return (

        <div className="App">
            <div className="wrapper">
                <div className="input_body">
                    <div className="inputs">
                        <InputValues value={values.numMax} name={'max value'} callBack={onMaxChangeHandler}/>
                        <InputValues value={values.numMin} name={'min value'} callBack={onMinChangeHandler}/>
                    </div>
                    <div className="inputs_button">
                        <Button disabled={disabledButtonAdd} name={'SET'} callBack={setHandler}/>
                    </div>
                </div>
                <div className="counter_body">
                    <div className="counter_indicator">
                        <Counter indicator={indicator} numMax={values.numMax} numMin={values.numMin}/>
                    </div>
                    <div className="counter_buttons">
                        <Button disabled={disabledButtonAdd} name={'INC'} callBack={incHandler}/>
                        <Button disabled={disabledButtonReset} name={'RESET'} callBack={resetHandler}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
