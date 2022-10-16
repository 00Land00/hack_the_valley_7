import { useState, useEffect } from 'react'
import axios from 'axios'
import exerciseEndpoint from './services/Exercises'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
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

//array to store xp gains 💪💪
const upper = [0, 5, 5, 5];
const lower = [10, 10, 0, 0];
const cardio = [5, 5, 0, 5, 1];
var total = upper.concat(lower, cardio);
var lvl = 1;

//function to draw bar on website
function Bar(muscleGroup) {
  const sum = muscleGroup.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  return <ProgressBar variant="success" animated now={sum} label={`${sum}%`} visuallyHidden />;
}

//"main" equivalent? 
const ProgressBars = () => {
  //defining the 4 bars, upperbody, lowerbody, cardio, total
  const upperBar = Bar(upper), lowerBar = Bar(lower), cardioBar = Bar(cardio), totalBar = Bar(total);
  const xCoor = "100", yCoor = "80";


  //outputs this stuff to the website
  return (
    <div>
      
      <h3 style={{color: 'green', marginLeft: '2%'}}>Progress</h3>
      
      <svg xmlns="http://www.w3.org/2000/svg">
        <circle cx={xCoor} cy={yCoor} r="65" fill="green" style={{marginBottom: '1000px'}} />
        <text textAnchor="middle" x={xCoor} y={yCoor} style = {{fontSize: '40px'}}>lvl {lvl}</text>
      </svg>
    

      <p style={{marginLeft: '2%'}}>
        <br></br>
        Total XP
        <div style={{width: '40%'}}>
          {totalBar}
        </div>

        Upper Body: 
        <div style={{width: '40%'}}>
          {upperBar}
        </div>
        Lower Body: 
        <div style={{width: '40%'}}>
          {lowerBar}
        </div>
        Cardio: 
        <div style={{width: '40%'}}>
          {cardioBar}
        </div>

      </p>

    </div>
  )
}

export default App;

//NOTES:
/*
- get date: const now = new Date()
   - access date with: {now.toString()}
- use console.log('for debugging')
- use {} to access a variable 
- components can be used inside other components 

- inserting links
  <div>
    here is a link: <a href='https://www.google.com/search?q=hello+world&rlz=1C1CHBF_enCA878CA878&oq=hello+world&aqs=chrome..69i57j46i67i433j0i67j46i67i199i433i465j0i67l5.1194j0j7&sourceid=chrome&ie=UTF-8'>name of link</a>
  </div>
const Hello = (tmp) => {
  return (
    <div style={divStyle}>
      <p>Hello {tmp.name}, you are lvl {tmp.level}</p>
    </div>
  )
}

<Hello name={name} level={level} />

*/
