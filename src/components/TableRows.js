import React, { useState } from 'react'
import styled from 'styled-components'


const TableRows = ({user}) => {
    const {organization, userName, email, id, phone, date, status} = user

    return (
        <>
            <TR>
                <td>{organization}</td>
                <td>{userName}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{date}</td>
            </TR>
        </>

    )
}

export default TableRows

const TR = styled.tr`
    border-bottom: 1px solid #213F7D1A;
    height: 60px;
    position: relative;
    

    td {
        white-space: nowrap;
        padding-right: 45px;

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