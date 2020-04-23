import React from 'react'
import { NavLink} from "react-router-dom"
import { Helmet } from 'react-helmet'
import VideoLooper from 'react-video-looper'
import introVideo from './videos/intro.mp4'
import {StyledHeader, StyledOverlay, StyledButtonGroup, StyledImage, StyledVideoLooper} from './Style.js'

export default function IntroPage(props) {
    return (
      <div>
        <Helmet>
          <title>React Fitness App</title>
        </Helmet>
        <IntroHeader></IntroHeader>
        <StyledVideoLooper>
          <VideoLooper source={introVideo} start={3.87} end={10.27} objectPosition={'50%'}/>
        </StyledVideoLooper>
        <IntroOverlay {...props}></IntroOverlay>
      </div>
    )
  }

  function IntroHeader() {
    return (
      <StyledHeader>
        <nav>
          <span className='logo'>React <b>Fitness</b> App</span>
          <ul>
            <li><a href="https://github.com/lewhunt/react-fitness-app"><i className="fa fa-github fa-3x"><i className="fa fa-heart"></i></i></a></li>
          </ul>
        </nav>
    </StyledHeader>
    )
  } 
  
  function IntroOverlay(props) {
    return (
      <StyledOverlay>
        <nav>
          <header>Choose a routine</header>
          <ul>
            {props.exercises.map(exercise => 
              <li key={exercise.route}>
                <NavLink to={exercise.route}>
                  <StyledImage src={exercise.thumb} />
                  <p>{exercise.title}</p>
                </NavLink>
              </li> 
            )}
          </ul>
          <StyledButtonGroup>
            <button className={props.exerciseDuration===1 ? 'active' : ''}  onClick={(evt) => props.setExerciseDuration(1)}>1 minute</button>
            <button className={props.exerciseDuration===10 ? 'active' : ''} onClick={(evt) => props.setExerciseDuration(10)}>10 minutes</button>
            <button className={!props.exerciseDuration ? 'active' : ''} onClick={(evt) => props.setExerciseDuration(null)}>non-stop</button>
          </StyledButtonGroup>
        </nav>
  
      </StyledOverlay>
    )
  }