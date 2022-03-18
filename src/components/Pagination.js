import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Pagination = (props) => {
    const {countPerPage, totalRecord, setCountPerPage, page, setPage} = props
    const [navItems, setNavItems] = useState([])

    const handlePrev = () => {
        if(page > 0) {
            setPage(page - 1)
        }
    }

    const handleNext = () => {
        if(page < (Math.ceil(totalRecord/countPerPage) - 1)){
            setPage(page + 1)
        }
    }

    const handleSetCount = (e) => {
        setPage(0)
        setCountPerPage(parseInt(e.target.value))
    }

    useEffect(() => {
        let tempNavItems = []
        for (let i = 0; i < Math.ceil(totalRecord/countPerPage); i++) {
            tempNavItems.push(i)
        }
        setNavItems(tempNavItems)
    }, [countPerPage, totalRecord])
  return (
      <PaginationSection>
          <div className="details">
              <p>Showing</p>
              <select defaultValue={countPerPage} onChange={handleSetCount}>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                  <option value={200}>200</option>
                  <option value={300}>300</option>
                  <option value={400}>400</option>
                  <option value={500}>500</option>
              </select>
              <p>out of {totalRecord}</p>
          </div>

        <div className="nav">
            <button onClick={handlePrev}> {"<"} </button>
            {navItems.slice(0, 3).map(item => (
                <button key={item} onClick={() => setPage(item)} className={item === page ? 'active' : ''}>{item}</button>
            ))}
            {(Math.ceil(totalRecord/countPerPage)) > 7 &&
                <span>...</span>
            }
            {navItems.length > 7 ?
                navItems.slice(navItems.length - 3, navItems.length).map(item => (
                    <button key={item} onClick={() => setPage(item)} className={item === page ? 'active' : ''}>{item}</button>
                ))
            :
                ""
            }
            <button onClick={handleNext}> {">"} </button>
        </div>
      </PaginationSection>
  )
}

export default Pagination

const PaginationSection = styled.div`
    margin: 25px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media(max-width: 1000px) {
        flex-direction: column;
    }
    
    .details {
        display: flex;
        align-items: center;
    
        @media(max-width: 1000px) {
            margin-bottom: 20px;
        }

        select {
            margin: 0px 10px;
            background: #213F7D1A;
            color: #213F7D;
            border-radius: 4px;
            padding: 5px 10px;
            outline: none;
            border: none;
        }
    }

    .nav {
        display: flex;
        align-items: center;

        span{
            color: #545F7D75;
        }

        button {
            background: none;
            border: none;
            outline: none;
            color: #545F7D75;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin: 0px 10px;
            
            &.active {
                color: #545F7D;
            }
            
            &:nth-of-type(1),
            &:last-of-type {
                width: 24px;
                height: 24px;
                background: #545F7D15;
                color: #545F7D;
                border-radius: 4px;
            }
        }
    }
`