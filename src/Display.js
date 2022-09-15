import React from 'react'
//If we want to use in our component ,First We have to destructure the data what we are getting from the another component 
const Display = ({days,hours,minutes,seconds}) => {
    return (
        <div>
            <h1>SALES COUNTDOWN TIMER</h1>
            <h2>Offer ends in</h2>
            {/* For the proper Alignmenet of minutes and corresponding number 60 ,have a same space for both use margin-right same*/}
            <table>
                <tbody>
                    <tr>
                        <th>{days}</th>&nbsp;&nbsp;
                        <th>{hours}</th>&nbsp;&nbsp;
                        <th>{minutes}</th>&nbsp;&nbsp;
                        <th>{seconds}</th>&nbsp;&nbsp;
                    </tr>
                    <tr>
                        <td>DAYS</td>&nbsp;&nbsp;
                        <td>HOURS</td>&nbsp;&nbsp;
                        <td>MINUTES</td>&nbsp;&nbsp;
                        <td>SECONDS</td>&nbsp;&nbsp;
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Display
