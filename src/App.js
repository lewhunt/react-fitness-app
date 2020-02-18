import React, { useState } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css'
import {GlobalStyle} from './Style.js'
import IntroPage from './IntroPage'
import ExercisePage from './ExercisePage'
import crunchesVideo from './videos/crunches.mp4'
import crunchesImage from './images/crunches.png'
import curlsVideo from './videos/curls.mp4'
import curlsImage from './images/curls.png'
import squatsVideo from './videos/squats.mp4'
import squatsImage from './images/squats.png'

const exercises = [
  {
    title: 'Arm Curls',
    route: '/arm-curls',
    source: curlsVideo,
    thumb: curlsImage,
    start: 7.10,
    end: 15.20
  },
  {
    title: 'Leg Squats',
    route: '/leg-squats',
    source: squatsVideo,
    thumb: squatsImage,
    start: 4.31,
    end: 9.48
  },
  {
    title: 'Abs Crunches',
    route: '/abs-crunches',
    source: crunchesVideo,
    thumb: crunchesImage,
    start: 5.70,
    end: 12.48
  },
]

function App() {
  const [exerciseDuration, setExerciseDuration] = useState(null);
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
        <Route exact path="/" render={() => <IntroPage exercises={exercises} exerciseDuration={exerciseDuration} setExerciseDuration={setExerciseDuration} />} />
        {exercises.map(exercise => 
          <Route key={exercise.route} path={exercise.route} render={() => <ExercisePage {...exercise} exerciseDuration={exerciseDuration} /> } />
        )}
    </Router>
  );
}

export default App;
