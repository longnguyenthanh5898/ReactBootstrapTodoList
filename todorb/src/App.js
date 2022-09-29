
import {  useState } from "react";

import Title from "./Title";
import ToDoInput from "./ToDoInput"
import ToDoList from "./ToDoList"
import {Container, Row, Col} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import { v4 as uuidv4 } from 'uuid';


const App = () =>{
  
  const getDataFromLS = () =>{
    // const data = localStorage.getItem('lists')
    // return data ? JSON.parse(data) : []

    return localStorage.getItem('lists') ? JSON.parse(localStorage.getItem('lists')) : []
  }

  const [lists, setLists] = useState(getDataFromLS())

  const handleDelete = (id) =>{
    console.log(id);
    let data = getDataFromLS()
    
    data.splice(id, 1)
    localStorage.setItem('lists', JSON.stringify(data))
    setLists(data)
  }

  const addTask = (task) =>{
    let data = getDataFromLS()
    data = [...data, {id: uuidv4(), task: task}]
    localStorage.setItem('lists', JSON.stringify(data))
    setLists(data)
    
  }


  return (
    <div className="App">
      <Container>   
              <Row className="justify-content-center mb-5 text-center">
                <Col sm={12} lg={8}>
                  <Title />
                </Col>
              </Row>

              <Row className="justify-content-center mb-5">
                <Col sm={12} lg={8}>
                  <ToDoInput addTask={addTask}/>
                </Col>
              </Row>

              <Row className="justify-content-center ">
                <Col sm={12} lg={8}>
                  <ToDoList lists={lists}  handleDelete={handleDelete}/>
                </Col>
              </Row>
       
      </Container>
    </div>
  )
}
export default App;
