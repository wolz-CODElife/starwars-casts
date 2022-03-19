import React from 'react'
import styled from 'styled-components'
import { theme } from '../utils/theme'

const Pagination = (props) => {
    const {totalHeight, totalCharacters} = props

    
  return (
      <PaginationSection>
          <div className="details">
              <p>Showing <span>{totalCharacters}</span></p>
          </div>
          <div className="details">
              <p>Total Height <span>{`${totalHeight} cm (${Math.floor(totalHeight/30.48)}ft/${((totalHeight%30.48)/2.54).toFixed(2)}in)`}</span></p>
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
    
    @media(max-width: 520px) {
        flex-direction: column;
    }
    
    .details {
        display: flex;
        align-items: center;
    
        @media(max-width: 520px) {
            margin-bottom: 10px;
        }

        span {
            background: ${theme.yellowOpac};
            padding: 3px 10px;
            border-radius: 6px;
        }
    }
`