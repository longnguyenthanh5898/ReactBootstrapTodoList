import { Button, Col, Container, Row } from "react-bootstrap"
import ToDo from "./ToDo"
const ToDoList = ({lists, handleComplete, handleDelete}) =>{
    
    return (
        <div>
            {lists.map(list =>{
                return (
                    <Container>
                        <Row>
                            <Col>
                                <ToDo  className="mx-2" list={list} handleComplete={handleComplete} handleDelete={handleDelete} />
                            </Col>
                        </Row>     
                    </Container>
                              
                )
            })}
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} className="mt-3">
                        <Button variant="danger" className="w-100" onClick={handleDelete}>CLEAR TASK</Button>     
                    </Col>
                </Row>
            </Container>
          
           
        </div>
        
    )
}
   
export default ToDoList