import React, { useEffect, useState } from "react";
import Display from "./Display";

const App = () => {
  //end time = offer EndTime , we will be stored in the form of milliseconds
  const endTime = new Date("August 01, 2023 16:26:00").getTime(); //getTime() => it will return in ms for that particular Date Time
  //For every Second There will be Some Changes, that changes also have to be stored , that's y we used setCurrentTime
  const [currentTime, setcurrentTime] = useState(new Date().getTime());
  const [offerEnded, setOfferEnded] = useState(false);
  const gap = endTime - currentTime; //in milliseconds => 177670892

  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  var remainingDays = Math.floor(gap / days);
  var remainingHours = Math.floor((gap % days) / hours);
  var remainingMinutes = Math.floor((gap % hours) / minutes);
  var remainingSeconds = Math.floor((gap % minutes) / seconds);

 //If this function is not there means we have to Refresh EveryTime for the Remaining Offer time, To See live we have to Use this Function
  //whenever the dependency variable changes, that time the component will be re-rendered
  useEffect(() => {
    //SetTime will take 2 arg. 1=> what action tp be Performed 2=>for how many millisec you want to update the function
    setTimeout(() => setcurrentTime(new Date().getTime()), 1000);
    setOfferEnded(gap <= 0);
  }, [gap]); // 11:30:55   Based on current time means , for every milliSecond the component will be reRenderd


  return (
    <div>
      <center>
        {/*Send the data by variable to the Display Component to display in our UI */}

        <Display
          days={remainingDays}
          hours={remainingHours}
          minutes={remainingMinutes}
          seconds={remainingSeconds}
          offerEnded={offerEnded}
        />
      </center>
    </div>
  );
};
export default App;


  /*
  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  //normal                                

  sec -> ms
  min -> sec
  hrs -> min
  days -> hrs

  //reverse (low to High)

    const remainingDays = Math.floor(gap / days);
    const remainingHours = Math.floor( (gap % days) / hours);         days -> hrs  = (days <- hrs) 
    const remainingMinutes = Math.floor( (gap % hours) / minutes);    
    const remainingSeconds = Math.floor( (gap % minutes) / seconds);
    console.log(remainingDays +"days " + remainingHours + "hours "+remainingMinutes  + "min "+ remainingSeconds   + " sec")
    Check for the Higher one  use % for that and use / for original
    Perform % with Higher One and / with original what you want
    hours =    (     % days )              / hours
  */

