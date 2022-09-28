import {Container, Row, Col } from "react-bootstrap"


const ToDo = ({list, handleComplete}) =>{
  
    return (
        <Container >
            <Row>
                <Col lg={10} md={10} sm={12} className="p-2 px-3 mb-2 bg-secondary text-white fw-bold w-100">
                    <div id={list.id} onClick={(e) =>handleComplete(e.target.id)} className={list.complete ? "complete" : ""} >
                        {list.task}
                    </div>
                </Col>
            </Row>
        </Container>
        
        
    )
}
export default ToDo