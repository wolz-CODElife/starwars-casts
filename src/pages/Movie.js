import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Loader from '../components/Loader'
import Table from '../layouts/Table'
import { IconHomeCircle } from '../utils/icons'
import { theme } from '../utils/theme'

const Movie = () => {
    const { id } = useParams()
    const [movie, setMoive] = useState()
    const [pending, setPending] = useState(false)
    const [crawl, setCrawl] = useState('')
    

    useEffect(() => {
        setPending(true)
        getThisMovie(id)
    }, [id])

    useEffect(() => {
        updateCrawl()
        // eslint-disable-next-line
    }, [movie])
    
    
    /**
     * This creates an animation-like entry for the opening crawl.
     * 
     */
    const updateCrawl = () => {
        if(movie) {
            let oldCrawl = movie.opening_crawl
            // Set an interval of 0.05s before prepending the
            // next character of the initial opening crawl to the visible crawl 
            const timeCrawler = setInterval(() => {
                setCrawl(crawl => crawl + oldCrawl[0])
                oldCrawl = oldCrawl.substring(1)

                if(oldCrawl.length < 1){
                    clearInterval(timeCrawler)
                }
            }, 50)
        }
    }
    
    /**
     * 
     * @param {String | Number} id - The episode_id of the movie
     * 
     * @example getThisMovie(3) 
     * @example getThisMovie("3") 
     */
    const getThisMovie = (id) => {
        // If the ID from the url param is valid, then query localStorage
        if(id) {
            let movies = JSON.parse(localStorage.getItem('movies'))
            // Filter the movie list in localStorage for unique episode ID
            let thisMovie = movies?.filter(movie => parseInt(movie.episode_id) === parseInt(id))[0]
            setMoive(thisMovie)
        }
        setPending(false)
    }

    return (
        <MovieContainer>
            <a href="/" className='homenav'><IconHomeCircle /></a>
            {/* Conditionally display loaidng spinner  */}
            {!pending ?
                movie ?
                    <>
                        <h1>{movie.title}</h1>
                        <p className='movie_text'>Produced by: {movie.producer}</p>
                        <p className='movie_text'>Directed by: {movie.director}</p>
                        <div className='crawler'>{crawl}</div>
                        <Table characters={movie.characters} />
                    </>
                :
                    <h1 className='error'> 404 - Movie Not Found !</h1>  
            :
                <div className="spinner">
                    <Loader color={theme.yellow} height="80px" width="80px" />
                </div>
            }
        </MovieContainer>
    )
}

export default Movie

const MovieContainer = styled.div`
    color: ${theme.white0};
    padding: 40px;

    .homenav {
        svg {
            width: 35px;
            height: 35px;
            color: ${theme.yellow};
        }
    }

    .movie_text {
        color: ${theme.yellowOpac};
        font-size: 14px;
    }

    .crawler {
        margin: 40px 0px;
    }

    .error, .spinner {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3.5rem;
        text-align: center;
    }
`
