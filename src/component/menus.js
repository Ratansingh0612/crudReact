import React from "react"
import { Link } from "react-router-dom"
import { ListGroup, ListGroupItem } from "reactstrap"

const Menus=()=>{

    return(
        
<ListGroup>
<Link
 className="list-group-item list-group-item-action"
tag="a"
 to="/"
 action
 >
Home
</Link>

<Link className="list-group-item list-group-item-action"
tag="a"
 to="/all-course"
 action
 >
View Courses
</Link>

<Link className="list-group-item list-group-item-action"
tag="a"
 to="/Add-form"
 action
 >
Add Course
</Link>
<Link className="list-grong serveup-item list-group-item-action"
tag="a"
 to="#!"
 action
 >
About
</Link>

  </ListGroup>
    )

}
export default Menus
