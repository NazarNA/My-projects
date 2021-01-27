import React, { useState, useEffect } from 'react';
import EpisodesTable from './EpisodesTable/EpisodesTable';
import ReactPaginate from 'react-paginate';
import { CircularProgress } from '@material-ui/core';
import NameFilter from './NameFilter/NameFilter';

import './Episodes.scss'

const Episodes = () => {
    const staticUrl = 'https://rickandmortyapi.com/api/episode';

    const [episodes, setEpisodes] = useState([])
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState();
    const [pages, setPages] = useState();
    const [currentPageUrl, setCurrentPageUrl] = useState('https://rickandmortyapi.com/api/episode')
    const [search, setSearch] = useState('')


    useEffect(() => {
        setLoading(true)
        fetch(staticUrl)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setEpisodes(data.results)
                setPages(data.info.pages)
            })
    }, []);

    useEffect(() => {
        setCurrentPageUrl(`${staticUrl}/?page=${page + 1}&name=${search.toLocaleLowerCase()}`)
    },[search, page])

    useEffect(() => {
        setLoading(true)
        fetch(currentPageUrl)
        .then(res => res.json())
        .then(data => {
            setTimeout(()=>{
                setLoading(false)
                setEpisodes(data.results)
                setPages(data.info.pages)
        },500)
        })
        .catch(err => {
            alert(`Помилка, за пошуковим запитом: '${search}' нічого не знайдено!`)
            setCurrentPageUrl(staticUrl);
        })
    }, [currentPageUrl]);

    const handlePageClick = e => setPage(e.selected)
    
    const findByName = data => setSearch(data.current.value)

    const resetHandler = () => setCurrentPageUrl(staticUrl)

    if(loading){
        return (
         <div className='progress'><CircularProgress /></div>
        )
    }

    return (
        <div className='episodes'>
            <NameFilter
                search={search}
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
