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
    const [pending, setPending] = useState(false)

    useEffect(() => {
        setPending(true)
        getCharacterDetails(characters)
    }, [characters])
    

    /**
     * @param {Array} characters - An array of characters url
     * 
     * @example getCharacterDetails([{String}, {String}]) 
     */
    const getCharacterDetails = (characters) => {
        let charactersDetails = []
        let sumHeight = 0
        characters.forEach(char => {
            getACharacterDetails(char).then(data => {
                if(data){
                    charactersDetails.push({name: data.name, gender: data.gender, height: data.height, url: data.url})
                    sumHeight =+ parseInt(data.height)
                }
            })
        })
        setDataList(charactersDetails)
        setTotalHeight(sumHeight)
        setPending(false)
    }

    return (
        <TableContainer>
            {!pending ?
                <>
                    <div className="table_responsive">
                        <table>
                            <TableHeader />
                            <tbody>
                                {dataList?.map((char) => (
                                    <TableRows char={char} key={char.url} />
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination totalHeight={totalHeight} totalCharacters={dataList.length} />
                </>
            :
                <Loader color={theme.yellow} height="30px" width="30px" />
            }
        </TableContainer>
    )
}

export default Table

const TableContainer = styled.div`
    .table_responsive {
        background: ${theme.black0};
        // background: #FFFFFF;
        box-shadow: 3px 5px 20px #0000000A;
        border: 1px solid ${theme.yellowOpac};
        border-radius: 4px;
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
