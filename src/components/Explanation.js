import React from 'react'
import styled from 'styled-components';

const StyledExplaination = styled.div`
  padding: 20px;
  margin-top: 10px;
  &:hover {
    color:${props => props.theme.primaryColor} ;
    border-radius: 27px;
    background: ${props => props.theme.silver};
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
`


const Explanation = (props) => {


    return(
        <StyledExplaination>
            <p>{props.explanation}</p>
        </StyledExplaination>
    )
}

export default Explanation