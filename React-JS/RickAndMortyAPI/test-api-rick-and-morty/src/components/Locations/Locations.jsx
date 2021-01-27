import React, { useState, useEffect } from 'react';
import LocationsTable from "./LocationsTable/LocationsTable";
import ReactPaginate from 'react-paginate';
import { CircularProgress } from '@material-ui/core';
import FilterLocations from './FilterLocations/FilterLocations';
import {useDispatch, useSelector} from 'react-redux';
import { fetchLocations, setDimension, setName, setType, changePage } from '../../actions/locationsActions';

import './Locations.scss'

const Locations = () => {
    //redux hooks
    const dispatch = useDispatch()
    const {locations, page, pages, loading, name, type, dimension} = useSelector(state => ({
        locations: state.locations.locations,
        page: state.locations.page,
        pages: state.locations.pages,
        error: state.locations.error,
        loading: state.locations.loading,
        name: state.locations.name,
        type: state.locations.type,
        dimension: state.locations.dimension 
    }))

    //react hooks
    useEffect(() => dispatch(fetchLocations()),[]);
    useEffect(() => dispatch(fetchLocations(page, name, type, dimension)),[page, name, type, dimension]);
   
    //search value handler
    const searchNameHandler = e => dispatch(setName(e.current.value))
    const searchTypeHandler = e => dispatch(setType(e.current.value))
    const searchDimensionHandler = e => dispatch(setDimension(e.current.value))
    const resetHandler = () => {
        dispatch(setName(''))
        dispatch(setType(''))
        dispatch(setDimension(''))
    }

    //pagination handler
    const handlePageClick = e => dispatch(changePage(e.selected));

    //conditional rendering
    if(loading) return <div className='progress'><CircularProgress /></div>

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
