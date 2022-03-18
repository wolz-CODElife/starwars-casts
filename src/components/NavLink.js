import React from 'react'
import styled from 'styled-components'
import { theme } from '../utils/theme'

/**
 * 
 * @param {Object} movie - The object data of each movie
 * 
 * @example <NavLink movie={movie} /> 
 * @returns {JSX.Element} JSX.Element
 */
const NavLink = ({ movie}) => {
  return (
    <LinkContainer href={`/movie/${movie.episode_id}`}>
        {movie.title}
    </LinkContainer>
  )
}

export default NavLink


// Link container styled component
const LinkContainer = styled.a`
    display: block;
    border-radius: 4px;
    padding: 10px;
    text-decoration: none;
    color: ${theme.black};

    &:hover {
    background: ${theme.yellowOpac};
    }
`