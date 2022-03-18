import React from 'react'
import styled from 'styled-components'
import { IconFemale, IconMale, IconTransgender } from '../utils/icons'
import { theme } from '../utils/theme'


const TableRows = ({char}) => {

    return (
        <>
            <TR char={char}>
                <td>{char.name}</td>
                <td>{char.gender === 'male'? <IconMale />: char.gender === 'female'? <IconFemale /> : <IconTransgender />}</td>
                <td>{`${char.height} cm`}</td>
            </TR>
        </>

    )
}

export default TableRows

const TR = styled.tr`
    border-bottom: 1px solid ${theme.yellowOpac};
    height: 60px;
    position: relative;
    

    td {
        white-space: nowrap;
        padding-right: 45px;
        text-transform: capitalize;

        svg {
            width: 30px;
            height: 30px;
            color: ${props => props.char.gender === 'male'? 'dodgerblue': props.char.gender === 'female'? 'pink' : 'white'};
        }
    }

    &:last-of-type {
        border-bottom: none;
    }
`