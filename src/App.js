import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'
import PageRoutes from './routes/Routes'
import { GetMovies } from './services/api'
import { IconAngleDown, IconFilterList } from './utils/icons'
import Loader from './components/Loader'
import { theme } from './utils/theme'
import NavLink from './components/NavLink'

const App = () => {
  const [openDropDown, setOpenDropDown] = useState(false)
  const [movies, setMovies] = useState([])
  const [sorted, setSorted] = useState(false)
  const [pending, setPending] = useState(false)

  // Rerender component using useEffect after getting movies list
  useEffect(() => {
    // Set pending to true, to initate loader
    setPending(true)
    // Call api method to get movies
    GetMovies().then(data => {
      if(data) {
        setMovies(data)
      }
      // Set pending to false, to terminate loader
      setPending(false)
    })
  }, [])

  /**
   * This event handles onclick dropdown buttin 
   * @param {*} e - Event onlick 
   */
  const handleDropDown = (e) => {
    e.preventDefault()
    setOpenDropDown(openDropDown => !openDropDown)
  }

  
  /**
   * @param {String} characters - The field by which the array of characters should be sorted
   * 
   * @example sortMovies() 
   */
    const sortMovies = () => {
    let sortedMovies = []
    if(sorted) {
      sortedMovies = movies.sort((a, b) => (a.release_date > b.release_date) ? 1 : -1)
      setMovies(sortedMovies)
      setSorted(!sorted)
    }
    else {
      sortedMovies = movies.sort((a, b) => (a.release_date > b.release_date) ? -1 : 1)
      setMovies(sortedMovies)
      setSorted(!sorted)
    }
  }
  
  return (
    <AppContainer>
      <Router>
        <PageRoutes />
      </Router>

      <div className="nav">
        <div className="dropdown">
          {/* Conditionally display dropdown */}
          {openDropDown &&
          <div className="popnav">
            <div className="menu">
              {/* Conditionally display loaidng spinner */}
              {!pending ?
                movies.length > 0 ?
                  movies.map(movie => (
                    <NavLink key={movie.episode_id} movie={movie} />
                  ))
                :
                  <p>No movies found !</p>  
              :
                <Loader color={theme.yellow} height="40px" width="40px" />
              }
            </div>
          </div>
          }
          
          <div className='btns'>
            <button className='dropdown-btn' onClick={handleDropDown}>Choose a star wars movie <IconAngleDown /></button>
            <button className='filter' onClick={sortMovies}><IconFilterList /></button>
          </div>
        </div>
      </div>
    </AppContainer>
  )
}

export default App


// App container styled component
const AppContainer = styled.div`
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.4);

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
          max-width: 100%;
          min-width: 300px;
          padding: 5px;
          border: 0.1px solid ${theme.black0};
          border-radius: 8px;
          height: 200px;
          overflow-y: auto;

          p {
            padding: 10px;
            color: red;
            text-align: center;
          }
        }
      }

      .btns {
        display: flex;

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

        .filter {
          margin-left: 10px;
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

          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
`