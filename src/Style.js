import styled, { createGlobalStyle, keyframes } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    background: black;
    margin: 0;
    width:100%;
    height:100%;
    font-family: "Helvetica Neue", Arial, sans-serif;
    user-select: none;
  }
`
const fadeInKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const StyledHeader = styled.header`
  position:fixed;
  width:100%;
  height: 6em;
  z-index: 1;
  nav {
    width:100%;
    margin:0.5em auto;
    display:flex;
    align-items:center;
    ul {
      margin: 0;
      padding: 0;
      display:flex;
      li {
        list-style:none;
      }
    }
    a {
      color: silver;
      text-decoration:none;
      padding: .3em 1em;
      display:block;
      i {
        position: relative;
      }
      .fa-star, .fa-heart {
        position: absolute;
        color: red;
        top:0;
        right:-6px;
        font-size:18px;
      }
    }
    span {
      color: silver;
      width:auto;
      margin-right:auto; 
      
      &.logo {  
        padding: .15em 0;
        margin-left: 1.25em; 
        margin-top: -0.5em;
        border-top: 1px solid rgba(255,255,255,0.5);  
        border-bottom: 1px solid rgba(255,255,255,0.5);  
        text-transform: uppercase;
        b {
          font-weight: 900;
        }
      }
    }
  }
`
export const StyledOverlay = styled.section`
  position: absolute;
  top: 0%;
  width:100%;
  height:100%;
  overflow: hidden;
  display:flex;
  align-items: flex-end;
  font-weight: 200;
  opacity: 0;
  animation: ${fadeInKeyframes} 200ms linear 0.9s forwards;
  nav {
    flex: 1;
    flex-direction: column;
    padding: 0;
    margin: 1em 0;
    display:flex;
    justify-content: center;
    align-items: center;
    header, ul {
      margin:0.4em auto;
      padding:0;
      @media (max-height: 400px), (max-width: 550px) {
        margin:0.3em auto;
      }
    }
    header {
      display:inline-block;
      width: 100%;
      text-align: center;
      font-size:3em;
      color: rgba(250,250,250,0.6);
      font-weight: 100;
      opacity: 0;
      animation: ${fadeInKeyframes} 200ms linear 1.7s forwards;
      @media (max-height: 400px), (max-width: 550px) {
        font-weight: 200;
        font-size:2.75em;
        color: rgba(250,250,250,0.8);

      }
    }
    ul {
      display:flex;
      li {
        list-style:none;
        text-align: center;
        margin: 0 2.5em;
        a {
          display: block;
          color: rgba(250,250,250,0.8);
          text-decoration: none;
          p {
            margin: 0.5em 0;
            font-size:1.2em;
          }
          &:hover, &:focus {
            color: white;
          }
        }
        @media (max-height: 400px), (max-width: 550px) {
          margin: 0 0.4em;
          a p {
            font-size:1em;
            font-weight:400;
            color: rgba(250,250,250,0.9);
          }
        }
      }
    }
`

export const StyledButtonGroup = styled.div`
  display: inline-flex;
  border: 1.5px solid rgba(255, 255, 255, 0.7);
  overflow: hidden;
  border-radius: 0.75em; 
  margin: 0.75em; 
  button {
    margin:0;
    padding: .3em .85em;
    display: inline-block;
    text-align: center;
    font-size: 0.9em;
    border-radius: 0;
    border: none;
    border-right: 1px solid silver;
    background: rgba(0, 0, 0, 0.2);
    color: silver;
    &.active, &:hover, &:focus {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.7);
      color: black;
      outline:0;
    }
    &:last-child {
      border-right: none;
    }
  }
`

export const StyledImage = styled.img`
  width:12vw;
  min-width:100px;
  max-width:150px;
  height:12vw;
  min-height:100px;
  max-height:150px;
  display: block;
  border-radius: 50%;
  border: .2em solid rgba(255,255,255,0.7);
  &:hover, &:focus {
    border: .2em solid rgba(255,255,255,0.9);
  }
  background: black;
  object-fit: contain;
`

export const StyledVideoLooper = styled.div`
  div > div:first-child {
    display: none;
  }
`