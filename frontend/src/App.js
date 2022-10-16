import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

//issues/questions/discussion whatever:
  //bar is not rendering anymore, it only displays as a percent??
  //theres some white overlap in the website (demo what i mean)
      //import a png image as a solution(?)
  //the colour thing in style (in the App component) dOES NOT work >:(   (for the thing inside the <text></text> tag), it "changes" the colour (when you inspect the page) but still renders as black??
  //how to change font family ??

//array to store xp gains 💪💪
const upper = [0, 5, 5, 5];
const lower = [10, 10, 0, 0];
const cardio = [5, 5, 0, 5, 353];
var total = upper.concat(lower, cardio);
//console.log(total)
var lvl = 1, lvlXP = 100, streak = 2, upperLvl = 1, lowerLvl = 1, cardioLvl = 1;

//brute force: calculate the sum of each list
var totalSum = total.reduce((partialSum, a) => partialSum + a, 0);
var upperSum = upper.reduce((partialSum, a) => partialSum + a, 0);
var lowerSum = lower.reduce((partialSum, a) => partialSum + a, 0);
var cardioSum = cardio.reduce((partialSum, a) => partialSum + a, 0);

//brute force: total xp calculation
if (totalSum > lvlXP){
  //console.log('lvl'+ lvl);
  lvl += Math.floor(totalSum/lvlXP);
  //console.log('updated lvl:' + lvl);
  //console.log('total sum before: ' + totalSum);
  totalSum -= Math.floor(totalSum/lvlXP)*lvlXP;
  //console.log('total sum updated: ' + totalSum);
}

//brute force: lvl calculation and remaining XP
if (upperSum > lvlXP){
  upperLvl += Math.floor(upperSum/lvlXP);
  upperSum -= Math.floor(upperSum/lvlXP)*lvlXP;
}

if (lowerSum > lvlXP){
  lowerLvl += Math.floor(lowerSum/lvlXP);
  lowerSum -= Math.floor(lowerSum/lvlXP)*lvlXP;
}

if (cardioSum > lvlXP){
  cardioLvl += Math.floor(cardioSum/lvlXP);
  cardioSum -= Math.floor(cardioSum/lvlXP)*lvlXP;
}

//function to draw progress bars on the website

function Bar(sum) {
  return <ProgressBar variant="success" animated now={sum} label={`${sum}%`} visuallyHidden />;
}

//"main" equivalent?
const App = () => {
  //creating the 4 bars: upperbody, lowerbody, cardio, and total
  //const upperBar = Bar(upperSum), lowerBar = Bar(lowerSum), cardioBar = Bar(cardioSum), totalBar = Bar(totalSum);
  const upperBar = Bar(upperSum), lowerBar = Bar(lowerSum), cardioBar = Bar(cardioSum), totalBar = Bar(totalSum);
  const xCoorXP = "100", yCoor = "80", xCoorS = "10";
  
  return (
    <div>
      <svg>
        <circle cx={xCoorXP} cy={yCoor} r="65" fill="green" />
        <text textAnchor="middle" x={xCoorXP} y={yCoor} style = {{fontSize: '40px', color: 'white'}}>lvl {lvl}</text>
      </svg>

      <svg >
        <circle cx={xCoorS} cy={yCoor} r="40" fill="green" />
        <text textAnchor="middle" x={xCoorS} y={yCoor} style = {{fontSize: '35px', color: 'white'}}>{streak}</text>
      </svg>

      <p style={{marginLeft: '2%'}}>
        <br></br>
        <div style={{width: '20%', marginLeft: '8%'}}>
          Total XP
          {totalBar}
        </div>

        <div style={{width: '40%', marginTop: '5%'}}>
          
          Upper Body: Lvl {upperLvl}
          {upperBar}
        </div>
        
        <div style={{width: '40%'}}>
          Lower Body: Lvl {lowerLvl}
          {lowerBar}
        </div>
        
        <div style={{width: '40%'}}>
          Cardio: Lvl {cardioLvl}
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
