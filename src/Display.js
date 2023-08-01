import React from "react";
//If we want to use in our component ,First We have to destructure the data what we are getting from the another component
const Display = ({ days, hours, minutes, seconds, offerEnded }) => {
  return (
    <div>
      <h1 className="mt-5 fw-bold">SALES COUNTDOWN TIMER</h1>
      {offerEnded ? (
        <h2 className="text-danger fst-italic fw-semibold">Offer Ended</h2>
      ) : (
        <div>
          <h2>Offer ends in</h2>
          {/* For the proper Alignmenet of minutes and corresponding number 60 ,have a same space for both use margin-right same*/}
          <table>
            <tbody>
              <tr className="text-center">
                <th>{days >= 0 ? days : 0}</th>&nbsp;&nbsp;
                <th>{hours >= 0 ? hours : 0}</th>&nbsp;&nbsp;
                <th>{minutes >= 0 ? minutes : 0}</th>&nbsp;&nbsp;
                <th>{seconds >= 0 ? seconds : 0}</th>&nbsp;&nbsp;
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
      )}
    </div>
  );
};

export default Display;
