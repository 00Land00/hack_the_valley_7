import { useState, useEffect } from 'react'
import axios from 'axios'
import exerciseEndpoint from './services/Exercises'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [isSelect, setIsSelect] = useState(false)
  const handleSelectChange = (event) => setIsSelect(!isSelect)
  const [exercises, setExercises] = useState([])
  
  return (
    <Container fluid>
      <Row>
        <Col xs={4}>
          replace with progress bar stuff
        </Col>
        <Col>
          <Row>
            <Col>replace with calendar stuff</Col>
          </Row>
          <Row>
            <Col>
              <MockExerciseInfo />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

const MockExerciseInfo = () => {
  const options = {weekday: 'long'};
  const today = Date.now()
  const todayStr = new Intl.DateTimeFormat('en-US', options).format(today)
  
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Level UP
        </Card.Title>
        <Card.Text className='my-0'>Today is {todayStr}</Card.Text>
        <Stack gap={2} className="col-md-10 mx-auto my-2">
          <Button variant="primary">Bench Press</Button>
          <Button variant="primary">Deadlift</Button>
          <Button variant="primary">Running</Button>
        </Stack>
      </Card.Body>
    </Card>
  )
}

const ExerciseInfo = ({exercises, setExercises, isSelectEH}) => {
  
  //exerciseEndpoint.getExercisesOfTheDay(todayStr)
                  //.then(response => setExercises(response))
  
  

  return (
    <>
      <div className='exercise_item'>
        {exercises ? exercises.map(exercise => (
          <div key={exercise.name}>
            <ExerciseButton exerciseName={exercise.name} exerciseClickHandler={isSelectEH} />
          </div>
        )) : ""}
      </div>
    </>
  )
}

// style (hardcoded)
// text, onHandleClick handler, prop arg
const ExerciseButton = ({exerciseName, exerciseClickHandler}) => (
  <button onClick={exerciseClickHandler}>
    {exerciseName}
  </button>
)

export default App
