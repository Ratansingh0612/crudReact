import React from "react"
import axios from "axios"
import base_url from "../Api/bootapi";
import { Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,}
    from "reactstrap"
import { toast } from "react-toastify";

    const Course=({course, update})=>
    {
        const deleteCourse=(id)=>{
            axios.delete(`${base_url}/deletecourse/${id}`).then(
                (response)=>{
                    //for success
                    console.log(response)
                    
                    toast.success("abhi abhi delete kiya")
                    update(id);
                    
                    //setCourses(response.data)
                },
                  (error)=>{
                      //for compiler
                        console.log(error)
                        toast.success("something went wrong")
                    }
                  );
               
           
       };
        return(
        
           <Card>
              <CardBody className="text-center">
                
                      <CardSubtitle className="font-weight-bold">{course.tittle}</CardSubtitle>
                          <CardText>
                              {course.description}
                          </CardText>
                          <Container className="text-center">
                              <Button color="danger" onClick=
                              {()=>{
                                  deleteCourse(course.id)
                              }}
                              >Delete</Button>
                              <Button color="warning ml-3">Update</Button>
                          </Container>
                      
                  
              </CardBody>

           </Card>

     


        )



    }
    export default Course;