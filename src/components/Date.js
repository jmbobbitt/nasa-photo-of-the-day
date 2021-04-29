import React from 'react'
import styled from 'styled-components';


const StyledDate = styled.p`
  &:hover {
    border-radius: 20px;
    color: white;
    background: ${props => props.theme.secondaryColor};
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
  `

const Date = (props) => {
    return (
        <StyledDate>
            <p>{props.date}</p>
        </StyledDate>
    )
}

export default Date