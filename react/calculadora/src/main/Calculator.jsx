import React, { Component, useState } from 'react'
import './calculator.css'
import Button from '../components/button'
import Display from '../components/display'




export default () => {

    const [displayValue, setDisplayValue] = useState('0')
    const [clearDisplay, setClearDisplay] = useState(false)
    const [operation, setOperation] = useState(null)
    const [values, setValues] = useState([0, 0])
    const [current, setCurrent] = useState(0)

    function addDigit(n) {
        if (n === '.' && displayValue.includes('.')) return;

        const clear = displayValue === '0' || clearDisplay
        const currentValue = clear ? '' : displayValue
        const value = currentValue + n
        setDisplayValue(value)
        setClearDisplay(false)


        if (n !== '.') {
            const i = current
            const newValue = parseFloat(value)
            const valuesArr = [...values]
            valuesArr[i] = newValue
            setValues(valuesArr)
            console.log(valuesArr)
        }

    }

    function setOperations(op) {
        if (current === 0) {
            setOperation(op)
            setCurrent(1)
            setClearDisplay(true)
        } else {
            const equals = op === '='
            const curretOperation = operation

            const vals = [...values]

            try {
                vals[0] = eval(`${vals[0]} ${curretOperation} ${vals[1]}`)
            } catch (e) {
                vals[0] = values[0]
            }
            vals[1] = 0
            setValues(vals)
            setDisplayValue(vals[0])
            if (equals) {
                setOperation(null)
            } else {
                setOperation(op)
            }
            setCurrent(equals ? 0 : 1)
            setClearDisplay(!equals)

        }
    }

    function clearMemory() {
        setClearDisplay(false)
        setCurrent(0)
        setDisplayValue(0)
        setOperation(null)
        setValues([0, 0])

    }



    return (

        <div className="calculator">
            <Display value={displayValue} ></Display>
            <Button label="AC" click={clearMemory} triple></Button>
            <Button label="/" click={setOperations} operation></Button>
            <Button label="7" click={addDigit}></Button>
            <Button label="8" click={addDigit}></Button>
            <Button label="9" click={addDigit}></Button>
            <Button label="*" click={setOperations} operation></Button>
            <Button label="4" click={addDigit}></Button>
            <Button label="5" click={addDigit}></Button>
            <Button label="6" click={addDigit}></Button>
            <Button label="-" click={setOperations} operation></Button>
            <Button label="1" click={addDigit}></Button>
            <Button label="2" click={addDigit}></Button>
            <Button label="3" click={addDigit}></Button>
            <Button label="+" click={setOperations} operation></Button>
            <Button label="0" click={addDigit} double></Button>
            <Button label="." click={addDigit}></Button>
            <Button label="=" click={setOperations} operation></Button>
        </div>
    )
}
