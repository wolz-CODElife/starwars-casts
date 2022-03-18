import React, { useState } from 'react'
import styled from 'styled-components'
import { IconFilterList } from '../utils/icons'

const TableHeader = () => {
    const [openFilter, setOpenFilter] = useState(false)
    return (
        <TableHeaderContainer>
            <tr>
                <th>
                    <button className='btn' onClick={() => setOpenFilter(!openFilter)}>organization <IconFilterList /></button>
                </th>
                <th>
                    <button className='btn' onClick={() => setOpenFilter(!openFilter)}>Username <IconFilterList /></button>
                </th>
                <th>
                    <button className='btn' onClick={() => setOpenFilter(!openFilter)}>Email <IconFilterList /></button>
                </th>
                <th>
                    <button className='btn' onClick={() => setOpenFilter(!openFilter)}>Phone number <IconFilterList /></button>
                </th>
                <th>
                    <button className='btn' onClick={() => setOpenFilter(!openFilter)}>Date joined <IconFilterList /></button>
                </th>
                <th>
                    <button className='btn' onClick={() => setOpenFilter(!openFilter)}>Status <IconFilterList /></button>
                </th>
                <th></th>
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
        font-size: 12px;
        font-weight: 600;
        display: flex;
        align-items: center;
        color: #545F7D;
        padding: 20px 0px;
        cursor: pointer;

        svg {
            width: 16px;
            height: 16px;
            margin: 0px 10px;
        }
    }
`
