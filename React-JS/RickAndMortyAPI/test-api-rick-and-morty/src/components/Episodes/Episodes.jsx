import React, { useEffect } from 'react';
import EpisodesTable from './EpisodesTable/EpisodesTable';
import ReactPaginate from 'react-paginate';
import { CircularProgress } from '@material-ui/core';
import NameFilter from './NameFilter/NameFilter';
import { useDispatch, useSelector } from 'react-redux';

import './Episodes.scss'
import { setSearch, fetchEpisodes, changePage } from '../../actions/episodesActions';

const Episodes = () => {
    //redux hooks
    const dispatch = useDispatch();

    const {episodes,loading,pages,page,search} = useSelector(state => ({
        episodes: state.episodes.episodes,
        loading: state.episodes.loading,
        pages: state.episodes.pages,
        page: state.episodes.page,
        search: state.episodes.search
    }));

  //react hooks
    useEffect(() => dispatch(fetchEpisodes()), []);
  
    useEffect(() => {
        dispatch(fetchEpisodes(page,search))
    }, [page,search]);
    
    //search handler
    const findByName = data => {
        dispatch(setSearch(data.current.value));
        data.current.value = '';
    }
    const resetHandler = () => dispatch(setSearch(''))

    //pagination handler
    const handlePageClick = e => dispatch(changePage(e.selected));

    //conditional rendering
    if(loading) return <div className='progress'><CircularProgress /></div>

    return (
        <div className='episodes'>
            <NameFilter
                findByName={findByName}
                resetHandler={resetHandler} 
            />
            <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Episode</th>
                        </tr> 
                    </thead>
                    <tbody>
                    {episodes.map((epis, i) => {
                        return( 
                            <EpisodesTable
                                key={i} 
                                name={epis.name} 
                                date={epis.air_date} 
                                episode={epis.episode} 
                            />
                        )
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

export default Episodes;
