import React, {useState, useEffect } from "react";
import Header from './components/Header'
import Photo from './components/Photo'
import Title from './components/Title'
import Explanation from './components/Explanation'
import Date from './components/Date'
import axios from 'axios'
import "./App.css";
import styled from 'styled-components';

const StyledApp = styled.div`
  color: ${props => props.theme.primaryColor};
  border: ${props => props.theme.border};
  margin: 30px;
  padding: 20px;
`




function App() {
  const [photo, setPhoto] = useState({})

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=mKuUOhcDj4iX6SswbMgbgHEmmXuOQurAKhZKNnGc')
        .then(res=> {
            console.log(res)
            setPhoto(res.data)
        })
    }, [])


  return (
    <StyledApp className="App">
      <Header/>
      <Title title={photo.title}/>
      <Date date={photo.date}/>
      <Photo url={photo.url}/> 
      <Explanation explanation={photo.explanation}/>

    </StyledApp>
  );
}

export default App;
