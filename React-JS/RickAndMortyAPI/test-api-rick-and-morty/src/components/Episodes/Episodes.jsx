import React, { useState, useEffect } from 'react';
import EpisodesTable from './EpisodesTable/EpisodesTable';
import ReactPaginate from 'react-paginate';
import { CircularProgress } from '@material-ui/core';
import NameFilter from './NameFilter/NameFilter';

import './Episodes.scss'

const Episodes = () => {
    const staticUrl = 'https://rickandmortyapi.com/api/episode';
    const [staticState, setStaticState] = useState('')

    const [episodes, setEpisodes] = useState([])
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState();
    const [pages, setPages] = useState();
    const [currentPageUrl, setCurrentPageUrl] = useState('https://rickandmortyapi.com/api/episode')
 

    useEffect(() => {
        setLoading(true)
        fetch(staticUrl)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setStaticState(data.results)
                setEpisodes(data.results)
                setPages(data.info.pages)
            })
    }, []);

    useEffect(() => {
        setLoading(true)
        fetch(currentPageUrl)
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            setEpisodes(data.results)
        })
    }, [currentPageUrl]);

    useEffect(() => {
        setCurrentPageUrl(`${staticUrl}/?page=${page + 1}`)
      },[page])

    const handlePageClick = (e) => {
        const selectedPage = e.selected
        setPage(selectedPage)
      }
    
      const findByName = (e) => {
        if(!e.target.value){
            setEpisodes(staticState)
        } else {
            let filteredByName = episodes.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setEpisodes(filteredByName)
        }


      }

      if(loading){
        return (
          <div className='progres'><CircularProgress /></div>
        )
      }

    return (
        <div className='episodes'>
            <NameFilter 
                episodes={episodes} 
                findByName={findByName} 
                staticState={staticState}
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
                        return <EpisodesTable
                                key={i} 
                                name={epis.name} 
                                date={epis.air_date} 
                                episode={epis.episode} 
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

export default Episodes;
