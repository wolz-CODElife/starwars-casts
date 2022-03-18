import React, { useState } from 'react'
import styled from 'styled-components'
import { IconFemale, IconMale, IconTransgender } from '../utils/icons'
import { theme } from '../utils/theme'


const TableRows = ({char}) => {

    return (
        <>
            <TR>
                <td>{char.name}</td>
                <td>{char.gender === 'male'? <IconMale />: char.gender === 'female'? <IconFemale /> : <IconTransgender />}</td>
                <td>{char.height}</td>
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

        span {
            border-radius: 100px;
            padding: 5px 10px;
        }

        button {
            background: none;
            border: none;
            outline: none;
            cursor: pointer;

            svg {
                width: 20px;
                height: 20px;
                color: #545F7D;
            }
        }
    }

    &:last-of-type {
        border-bottom: none;
    }
`