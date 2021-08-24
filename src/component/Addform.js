import { Button } from "reactstrap"
import React, { useEffect, useState } from "react";
import { Container, FormGroup, Input } from "reactstrap"
import { data } from "jquery";
import axios from "axios"
import base_url from "../Api/bootapi";
import { toast } from "react-toastify";

const Addform =()=>{
    useEffect(()=>
    {
       document.title="add course"

    },[]);

const[course,setCourse]=useState({});

//formhandler
const formHandler=(e)=>{
    console.log(course);
    postDataToserver(course);
    e.preventDefault();
}

//creating function to post data on server
const postDataToserver=(data)=>{
    axios.post(`${base_url}/addCourse`,data).then(
        (response)=>{
            //for success
            console.log(response)
            toast.success("abhi abhi add huaa ye vala")
           setCourse({id:"",title:"",description:""})
        },
          (error)=>{
              //for compiler
                console.log(error)
                toast.success("something went wrong")
            }
          );
       
   
};


return(
    <div>
        <form onSubmit={formHandler}>
            <FormGroup>
            <label for="userId">userid</label>
                <Input type="text" placeholder="enter user id" id="id" onChange={(e)=>{
                    setCourse({...course,id:e.target.value})
                }}/>
                
            </FormGroup>
            <FormGroup>
                <label for="username">username</label>
                <Input type="text" placeholder="enter title" id="tittle"  onChange={(e)=>{
                    setCourse({...course,tittle:e.target.value})
                }}/>
            </FormGroup>
            <FormGroup>
                <label for="des">userid</label>
                <Input type="textarea" placeholder="enter description" id="description"  onChange={(e)=>{
                    setCourse({...course,description:e.target.value})
                }} style={{height:100}}/>
            </FormGroup>
            <Container>
                <Button type="submit" color="success">Add Course</Button>
                <Button type="reset" color="warning ml-2" onClick={(e)=>{
                    setCourse({})
                }}>clear</Button>
               
            </Container>


         
           

        </form>
       



    </div>
)
}
 export default  Addform;