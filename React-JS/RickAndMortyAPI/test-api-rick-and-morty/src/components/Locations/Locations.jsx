import React, { useState, useEffect } from 'react';
import LocationsTable from "./LocationsTable/LocationsTable";
import ReactPaginate from 'react-paginate';
import { CircularProgress } from '@material-ui/core';
import FilterLocations from './FilterLocations/FilterLocations';

import './Locations.scss'

const Locations = () => {
    const staticUrl = 'https://rickandmortyapi.com/api/location'

    const [currentPageUrl, setCurrentPageUrl] = useState('https://rickandmortyapi.com/api/location')
    const [locations, setLocations] = useState([])
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState();
    const [pages, setPages] = useState();
    const [searchByName, setSeacrhByName] = useState('')
    const [searchByType, setSearchByType] = useState('')
    const [searchByDimension, setSearchByDimension] = useState('')

    useEffect(()=>{
        setLoading(true)
        fetch(currentPageUrl)
            .then(response => response.json())
            .then(data =>{
                setLoading(false)
                console.log(data)
                setLocations(data.results)
                setPages(data.info.pages)
            })
    },[])

    useEffect(() => {
        setLoading(true)
        fetch(currentPageUrl)
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setLocations(data.results)
            setPages(data.info.pages)
        })
    }, [currentPageUrl]);

    useEffect(() => {
        setCurrentPageUrl(`${staticUrl}/?page=${page + 1}&name=${searchByName || ''}&type=${searchByType || ''}&dimension=${searchByDimension || ''}`)
    },[page, searchByName, searchByType, searchByDimension])

    console.log('searchByType :', searchByType);
    console.log('searchByName :', searchByName);
    console.log('searchByDimension :', searchByDimension);

    const searchNameHandler = (e) => {
        setSeacrhByName((e.current.value).toLowerCase())
        console.log(searchByName);
    }

    const searchTypeHandler = (e) => {
        setSearchByType((e.current.value).toLowerCase())
        console.log(searchByType);
    }

    const searchDimensionHandler = (e) => {
        setSearchByDimension((e.current.value).toLowerCase())
        console.log(searchByDimension);
    }

    const resetHandler = () => {
        setCurrentPageUrl(staticUrl)
    }

    const handlePageClick = (e) => {
        setPage(e.selected)
    }

    if(loading){
        return (
          <div className='progres'><CircularProgress /></div>
        )
    }

    return (
        <div className='locations'>
            <FilterLocations 
                searchNameHandler={searchNameHandler}
                searchTypeHandler={searchTypeHandler}
                searchDimensionHandler={searchDimensionHandler}
                resetHandler={resetHandler}
            />
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Dimensions</th>
                            <th>Type</th>
                        </tr> 
                    </thead>
                    <tbody>
                    {locations.map((loc, i) => {
                        return <LocationsTable
                                key={i} 
                                name={loc.name} 
                                dimension={loc.dimension} 
                                type={loc.type} 
                            />
                    })}
                    </tbody>
                </table>
                <ReactPaginate 
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={pages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                activeClassName={"active"}
                pageLinkClassName={"pagination"}
                initialPage={page}
            />
        </div>
    );
}

export default Locations;
