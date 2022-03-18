import React, { useState } from 'react'
import styled from 'styled-components'
import { IconFilterList } from '../utils/icons'
import { theme } from '../utils/theme'

const TableHeader = () => {
    const [openFilter, setOpenFilter] = useState(false)
    return (
        <TableHeaderContainer>
            <tr>
                <th>
                    <button className='btn' onClick={() => setOpenFilter(!openFilter)}>Name <IconFilterList /></button>
                </th>
                <th>
                    <button className='btn' onClick={() => setOpenFilter(!openFilter)}>Gender <IconFilterList /></button>
                </th>
                <th>
                    <button className='btn' onClick={() => setOpenFilter(!openFilter)}>Height <IconFilterList /></button>
                </th>
            </tr>
        </TableHeaderContainer>
    )
}

export default TableHeader

const TableHeaderContainer = styled.thead`   
    th {
        width: max-content;
        white-space: nowrap;
        position: relative;
    }

    .btn {
        background: none;
        border: none;
        outline: none;
        margin-right: 35px;
        text-transform: uppercase;
        text-align: left;
        font-size: 18px;
        font-weight: 600;
        display: flex;
        align-items: center;
        color: ${theme.yellow};
        padding: 20px 0px;
        cursor: pointer;

        svg {
            width: 16px;
            height: 16px;
            margin: 0px 10px;
        }
    }
`
