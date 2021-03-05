import React from 'react'
import styled from 'styled-components';


const StyledH1 = styled.h1`
  &:hover {
    border-radius: 20px;
    color: white;
    background: ${props => props.theme.secondaryColor};
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
  `

const Header = () => {


    return ( 
        <StyledH1>
            <h1> Nasa's Photo of the Day</h1>
        </StyledH1>
    )
}

export default Header