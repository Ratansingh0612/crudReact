import { Button } from "reactstrap"
import React from "react"
import { Container, FormGroup, Input } from "reactstrap"

const Addform =()=>{
return(
    <div>
        <form>
            <FormGroup>
               
                <Input type="text" placeholder="enter user id" id="userId"/>
            </FormGroup>
            <FormGroup>
                <label for="username">username</label>
                <Input type="text" placeholder="enter username" id="username"/>
            </FormGroup>
            <FormGroup>
                <label for="des">userid</label>
                <Input type="textarea" placeholder="enter description" id="des" style={{height:100}}/>
            </FormGroup>
            <Container>
                <Button color="success">Add Course</Button>
                <Button color="warning ml-2">clear</Button>
               
            </Container>


         
           

        </form>
       



    </div>
)
}
 export default  Addform;