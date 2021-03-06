import { Button } from "reactstrap";
import React, { useEffect, useState } from "react";
import Course from "./Course";



import base_url from "../Api/bootapi";
import axios from "axios"
import { toast } from "react-toastify";

const Allcourse=()=>{

    useEffect(()=>
    {
       document.title="All courses with ratan"

    },[]);

    //function to call seerver
 const getallcourses=()=>{
     axios.get(`${base_url}/getAllcourses`).then(
         (response)=>{
             //for success
             console.log(response)
             toast.success("courses has been loded")
             setCourses(response.data)
         },
           (error)=>{
               //for compiler
                 console.log(console.error())
                 toast.success("something went wrong")
             }
           );
        
    
};

//CALLING LOADING COURSE FUNCTION
useEffect(()=>{
    getallcourses();
},[]);


    const[courses,setCourses]=useState([
        // {title:"java course",description:"this is java description"},

        // {title:"htlm course",description:"this is html description"},
        // {title:"react course",description:"this is react description"},
        // {title:"angular course",description:"this is angular description"}
    ])
    const updateCourse=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id))
    };

return(
    <div>
       
        <h1>All courses</h1>
        
        {
            courses.length>0
            ?courses.map((item)=><Course key={item.id} course={item} update={updateCourse}/>)
            :"no courses available"
        }

    </div>
)

}
 export default Allcourse;