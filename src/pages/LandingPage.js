import React from 'react'
import styled from 'styled-components'

const LandingPage = () => {
  return (
      <LandingContainer>
        <img src="https://i.postimg.cc/FsKY3BkG/image.png" alt="Logo" />
      </LandingContainer>
  )
}

export default LandingPage



// Landing page container styled component
const LandingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    min-height: 90vh;

    img {
        max-width: 80%;
        width: 600px;
        object-fit: contain;
        animation: fade 3s linear;
    }

    @keyframes fade {
        0% {
            margin-top: -100vh;
            // width: 0px;
            filter: opacity(0);
        }
        100% {
            margin-top: 0pv;
            // width: 600px;
            filter: opacity(1);
        }
    }
`