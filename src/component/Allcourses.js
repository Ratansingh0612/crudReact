import React, { useState } from "react";
import Course from "./Course";

const Allcourse=()=>{

    const[courses,setCourses]=useState([
        {title:"java course",description:"this is java description"},
        {title:"htlm course",description:"this is html description"},
        {title:"react course",description:"this is react description"},
        {title:"angular course",description:"this is angular description"}
    ])
return(
    <div>
        <h1>All courses</h1>
        
        {
            courses.length>0
            ? courses.map((item)=><Course course={item}/>)
            :"no courses available"
        }

    </div>
)

}
 export default Allcourse;