import React, { useState } from 'react';

const SetTimer = () => {
    const [time, setTime] = useState(0);
    const hourArray = [];
    const minSecArray = [];

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('I have been clicked');
    }

    // put 0-24 in hourArray
    for(let i = 0; i <= 24; i++) {
        hourArray.push(i);
    }

    // put 0-59 in minSecArray
    for(let i = 0; i < 60; i++) {
        minSecArray.push(i);
    }

    return (
        <div>
            <form className='setTimer' id='setTimer' name='setTimer' onSubmit={handleFormSubmit}>
                <label for="setHours">Hours:</label>
                <select name="setHours" id="setHours">
                    {hourArray.map((i) => {
                        return (
                            <option value={`${i}`} key={`hour-${i}`}>{i}</option>
                        )
                    })}
                </select>
                <label for="setMinutes">Minutes:</label> 
                <select name="setMinutes" id="setMinutes">
                    {minSecArray.map((i) => {
                        return (
                            <option value={`${i}`} key={`min-${i}`}>{i}</option>
                        )
                    })}
                </select>
                <label for="setSeconds">Seconds:</label>
                <select name="setSeconds" id="setSeconds">
                    {minSecArray.map((i) => {
                        return (
                            <option value={`${i}`} key={`sec-${i}`}>{i}</option>
                        )
                    })}
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SetTimer;