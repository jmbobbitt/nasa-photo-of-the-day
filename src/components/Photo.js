import React from "react";
import styled from 'styled-components';

const StyledPicture = styled.div`
img{ 
max-width: 100%;
  height: auto;
border-radius: 50%;
}
`

const Photo = (props) => {
   
    return(
        <StyledPicture>
            <img src={props.url} alt=''/>
        </StyledPicture>
    )
}

export default Photo