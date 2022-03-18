import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import PageRoutes from './routes/Routes'
import { IconAngleDown } from './utils/icons'
import Loader from './utils/Loader'
import { theme } from './utils/theme'

const App = () => {

  
  return (
    <AppContainer>
      <Router>
        <PageRoutes />
      </Router>

      <div className="nav">
        <div className="dropdown">
          <div className="popnav">
            <div className="menu">
              <a href="/">Choose a star wars movie <IconAngleDown /></a>  
              <Loader color={theme.yellow} height="40px" width="40px" />
              <a href="/">Choose a star wars movie <IconAngleDown /></a>  
              <a href="/">Choose a star wars movie <IconAngleDown /></a>  
              <a href="/">Choose a star wars movie <IconAngleDown /></a>  
            </div>
          </div>
          <button className='dropdown-btn'>Choose a star wars movie <IconAngleDown /></button>
        </div>
      </div>
    </AppContainer>
  )
}

export default App


// App container styled component
const AppContainer = styled.div`
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.7);

  .nav {
    position: fixed;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;

    .dropdown {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;

      .popnav {
        display: absolute;
        display: flex;
        align-items: center;
        bottom: 20px;
        z-index: 1000;

        .menu{
          background: ${theme.white};
          margin-bottom: 10px;
          padding: 5px;
          border: 0.1px solid ${theme.black0};
          border-radius: 8px;
          height: 200px;
          overflow-y: auto;
          
          a {
            display: block;
            border-radius: 4px;
            padding: 10px;
            text-decoration: none;
            color: ${theme.black};

            &:hover {
              background: ${theme.yellowOpac};
            }
          }
        }
      }

      .dropdown-btn {
        height: 40px;
        padding: 0px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: ${theme.yellow};
        border: none;
        border-radius: 6px;
        color: ${theme.black};
        font-weight: 600;
        cursor: pointer;

        &:hover {
          box-shadow: 0px 1.5px 5px #ccc;
        }

        svg {
          width: 20px;
          height: 20px;
          margin-left: 15px;
        }
      }
    }
  }
`