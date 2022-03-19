import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'
import TableHeader from '../components/TableHeader'
import TableRows from '../components/TableRows'
import { getACharacterDetails } from '../services/api'
import { theme } from '../utils/theme'

const Table = ({characters}) => {
    const [totalHeight, setTotalHeight] = useState(0)
    const [dataList, setDataList] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [sorter, setSorter] = useState('')
    const [filter, setFilter] = useState('All')
    const [pending, setPending] = useState(false)
    // Conditionally set movielist as filteredList else original dataList
    const movieList = filteredList.length > 0 ? filteredList : dataList

    useEffect(() => {
        setPending(true)
        getCharacterDetails(characters)

        // eslint-disable-next-line
    }, [characters])
    

    /**
     * @param {Array} characters - An array of characters url
     * 
     * @example getCharacterDetails([{String}, {String}]) 
     */
    const getCharacterDetails = (characters) => {
        let charactersDetails = []
        characters.forEach(char => {
            // while still in look stop update timeout
            handleStillPending()
            getACharacterDetails(char).then(data => {
                if(data){
                    charactersDetails.push({name: data.name, gender: data.gender, height: data.height, url: data.url})
                    // Exclude height that have NAN as value, include only positive integers
                    if(parseInt(data.height) > 0) {
                        setTotalHeight(parseInt(totalHeight) + parseInt(data.height))
                    }
                }
            })
        })
        setDataList(charactersDetails)
        handleStopPending()
    }

    /**
     * @param {String} characters - The field by which the array of characters should be sorted
     * 
     * @example sortCharacterDetails(['name']) 
     */
    const sortCharacterDetails = (sortBy) => {
        let sortedCharacters = [] 
        if(sortBy === sorter) {
            setSorter('')
            // Convert value of height to integer  before sorting
            if(sortBy === 'height'){
                sortedCharacters = dataList.sort((a, b) => (parseInt(a[sortBy]) > parseInt(b[sortBy])) ? -1 : 1)
            }
            else{
                sortedCharacters = dataList.sort((a, b) => (a[sortBy] > b[sortBy]) ? -1 : 1)
            }
            setDataList(sortedCharacters)
        }
        else {
            setSorter(sortBy)
            // Convert value of height to integer  before sorting
            if(sortBy === 'height'){
                sortedCharacters = dataList.sort((a, b) => (parseInt(a[sortBy]) > parseInt(b[sortBy])) ? 1 : -1)
            }
            else{
                sortedCharacters = dataList.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1)
            }
            setDataList(sortedCharacters)
        }
    }

    /**
     * @param {Event} e - onChange event
     * 
     * @example handleFilter(e)
     */
    const handleFilter = (e) => {
        let selectedFilter = e.target.value
        let filteredCharacters = [] 
        // If filter set to all, use origin datalist; empty filteredList
        setFilter(selectedFilter)
        if(selectedFilter === 'ALL'){
            setFilteredList([])
        }
        else {
            if(selectedFilter === 'Non-Binary'){
                filteredCharacters = dataList.filter(person => person.gender.toLowerCase() !== 'male' && person.gender.toLowerCase() !== 'female' )
                setFilteredList(filteredCharacters)
            }
            else {
                filteredCharacters = dataList.filter(person => person.gender.toLowerCase() === selectedFilter.toLowerCase())
                setFilteredList(filteredCharacters)
            }
        }
    }
    
    // set timer to end pending state
    let closingTimer
    let closingInterval = 2000

    
    const handleStopPending = () => {
        clearTimeout(closingTimer)
        closingTimer = setTimeout(() => {
            setPending(false)
        }, closingInterval);
    }
    
    const handleStillPending = () => {
        clearTimeout(closingTimer)
    }

    return (
        <TableContainer>
            {!pending ?
                <>
                    <div className="form">
                        <select onChange={handleFilter}>
                            <option value={filter}>{filter}</option>
                            <option value="All">All</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Non-Binary">Non-Binary</option>
                        </select>
                    </div>
                    <div className="table_responsive">
                        <table>
                            <TableHeader sortCharacterDetails={sortCharacterDetails} />
                            <tbody>
                                {movieList?.map((char) => (
                                    <TableRows char={char} key={char.url} />
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination totalHeight={totalHeight} totalCharacters={movieList.length} />
                </>
            :
                <Loader color={theme.yellow} height="80px" width="80px" />
            }
        </TableContainer>
    )
}

export default Table

const TableContainer = styled.div`   
    .form {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;

        select {
            height: 35px;
            padding: 0px 10px;
            background: ${theme.yellow};
            border: none;
            border-radius: 6px;
            color: ${theme.black};
            font-weight: 600;
            cursor: pointer;
        }
    }

    .table_responsive {
        background: ${theme.black0};
        box-shadow: 0px 0px 20px ${theme.yellowOpac};
        border: 1px solid ${theme.yellowOpac};
        border-radius: 10px;
        padding: 30px;
        overflow-x: auto;
        height: max-content;

        &::-webkit-scrollbar {
            height: 6px;
            border-radius: 8px;
            background: #39CDCC10;
        }
        &::-webkit-scroll-thumb {
            border-radius: 8px;
            background: #213F7D;
            border: 1px solid black;
        }        

        table {
            border-collapse: collapse;
            color: ${theme.yellow};
            z-index: 1;
            width: 100%;
            max-height: 60vh;
            overflow-y: auto;
        }
    }
`
