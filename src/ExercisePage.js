import React from 'react';
import { NavLink} from "react-router-dom";
import { Helmet } from 'react-helmet';
import VideoLooper from 'react-video-looper'
import {StyledHeader} from './Style.js'

export default function ExercisePage(props) {
    const loopsPerMinute = Math.round(60 / (props.end - props.start))
    const loopCount = props.exerciseDuration ? (loopsPerMinute-2) * props.exerciseDuration : null
    return (
        <div>
            <Helmet>
                <title>React Fitness App - {props.title}</title>
            </Helmet>
            <ExerciseHeader></ExerciseHeader>
            <VideoLooper source={props.source} start={props.start} end={props.end} loopCount={loopCount} />
        </div>
    )
}

function ExerciseHeader() {
    return (
      <StyledHeader>
        <nav>
          <span>
              <NavLink to="/"><i className="fa fa-chevron-circle-left fa-3x"></i></NavLink>
          </span>
          <ul>
            <li><a href="https://github.com/lewhunt/react-video-looper"><i className="fa fa-github fa-3x"></i></a></li>
          </ul>
      </nav>
    </StyledHeader>
    )
}