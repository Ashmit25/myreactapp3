 //Create a react app which fetches and displays upcoming SpaceX launches
 import {useEffect, useState } from 'react';
 import './App.css';
 
 const SpaceXURL ='https://api.spacexdata.com/v4/launches/upcoming';
 
 function App () {
 
   const [launches,setlaunches ] =useState()
   
   useEffect (()=>{
     fetch(SpaceXURL)
       .then((res)=>res.json())
       .then((res)=>setlaunches(res));
   },[])
     
   return (
     <div className="launches">
    
       <h1> <u>Upcoming SpaceX Launches</u>   </h1>
       <h2> Name ------------------------- Launch Date</h2>
       <ul>
       {
          launches ?.map((launch) => (
          <li>
             {launch.name + " --------------------- " + launch.date_local } <br></br><br></br>
          </li>
           ))
       }
       </ul>
       <h3>Note: The data may take some time to load</h3>
     </div>
     );
 }
 export default App;
   