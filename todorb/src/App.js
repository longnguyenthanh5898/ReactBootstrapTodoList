
import { useEffect, useState } from "react";

import Title from "./Title";
import ToDoInput from "./ToDoInput"
import ToDoList from "./ToDoList"
import {Container, Row, Col} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"




const App = () =>{
  const [lists, setLists] = useState([])

  // useEffect(() =>{
  //   localStorage.setItem('lists', JSON.stringify(lists))
  // }, [lists])

  // useEffect(() =>{
  //   const data = JSON.parse(localStorage.getItem('lists'))
  //   if(data){
  //     setLists(data)
  //   }
  // }, [])

  const handleComplete = (id) =>{
    let completedTask = lists.map(task =>{
      return task.id === Number(id) ? {...task, complete: !task.complete} : {...task}
    })
    setLists(completedTask)
  }

  const handleDelete = () =>{
    let restTask = lists.filter(task =>{
      return !task.complete
    })
    setLists(restTask)
  }

  const addTask = (task) =>{
    let newLists = lists
    newLists = [...newLists, {id: lists.length + 1, task: task, complete: false}]
    setLists(newLists)
    localStorage.setItem('lists', JSON.stringify(newLists))
  }

  // const renderTask = () =>{
  //   const data = JSON.parse(localStorage.getItem('lists'))
  //   if(data){
  //     setLists(data)
  //   }
  // }
  // const getDataLocalStorage = () =>{
  //   return localStorage.getItem('lists') ? JSON.parse(localStorage.getItem('lists')):[]
  // }
  // let data = getDataLocalStorage()
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
                  <ToDoList lists={lists} handleComplete={handleComplete} handleDelete={handleDelete}/>
                </Col>
              </Row>
       
      </Container>
    </div>
  )
}
export default App;
