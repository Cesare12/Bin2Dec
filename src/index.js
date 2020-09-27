import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
    const [binaryText, setBinaryText] = useState('');
    const regExpNotBin = /[^01]/
    const result = binaryText.length !== 0
        && !regExpNotBin.test(binaryText)
        && binaryText.split('').reverse().reduce(
            (total, curVal, index) => {
                curVal === '1' && (total += 2 ** index)
                return total;
            }, 0)
    var error = ''
    if (regExpNotBin.test(binaryText)) { error = 'Please enter either 0 or 1'; }
    return (
        <>
            <div className='title'>
                <h1 className='title'>Binary to Decimal Converter</h1>
            </div>
            <div className='input'>
                <input placeholder='Enter a binary number' value={binaryText} onChange={e => setBinaryText(e.target.value)} />
            </div>
            <div className='output'>
                <div >{result}</div>
                <div className='error'>{error}</div>
            </div>
        </>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
