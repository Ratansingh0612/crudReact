import React from "react";
import {Jumbotron, Container,Button} from "reactstrap"

const Home=()=>{
    return(
    <div>
    <Jumbotron className="text-center">
        <h1>this is jumbotron</h1>
        <p>
            this is developed by ratan singh
        </p>
        <Container>
            <Button color="primary">click me nothing will happen trust me</Button>
        </Container>


    </Jumbotron>
    </div>
    )

}
export default Home;