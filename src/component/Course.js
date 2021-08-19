import React from "react"
import { Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,}
    from "reactstrap"

    const Course=()=>
    {
        return(
          <div className="text-center">
           <Card>
              <CardBody className="text-center">
                  <CardTitle> java spring boot</CardTitle> 
                      <CardSubtitle> card subtitle</CardSubtitle>
                          <CardText>
                              it is java course for biginerssssssssss
                          </CardText>
                          <Container>
                              <Button color="danger">Delete</Button>
                              <Button color="warning">Update</Button>
                          </Container>
                      
                  
              </CardBody>

           </Card>

          </div>


        )



    }
    export default Course;