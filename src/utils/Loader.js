import React from 'react'
import styled from 'styled-components'
import { IconSpinner } from './icons'
import { theme } from './theme'

/**
 * 
 * @param {String} color - The color of the SVG spinner
 * @param {String} width - The width of the SVG spinner
 * @param {String} height - The height of the SVG spinner
 * 
 * @example <Loader width="10px" height="10px" /> 
 * @returns {JSX.Element} JSX.Element
 */
const Loader = ({ color, width, height}) => {
  return (
    <LoaderContainer color={color}>
        <IconSpinner width={width || '30px'} height={height || '30px'} />
    </LoaderContainer>
  )
}

export default Loader

// Loader container styled component
const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    flex: 1; /* full width */
    
    svg {
        color : ${props => props.color || theme.yellow};
        animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
    }
`