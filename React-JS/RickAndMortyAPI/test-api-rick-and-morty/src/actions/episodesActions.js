import { 
    CHANGE_PAGE,
    FETCH_EPISODES_BEGIN, 
    FETCH_EPISODES_FAILURE, 
    FETCH_EPISODES_SUCCESS, 
    SET_SEARCH, 
} from "../types/episodesTypes";

export const fetchEpisodesBegin = () => ({type: FETCH_EPISODES_BEGIN});
export const fetchEpisodesSuccess = episodes => ({type: FETCH_EPISODES_SUCCESS, payload: episodes});
export const fetchEpisodesFailure = error => ({type: FETCH_EPISODES_FAILURE, payload: { error }});

export const fetchEpisodes = (page, search='') => {
    return dispatch => {
        dispatch(fetchEpisodesBegin());
        fetch(`https://rickandmortyapi.com/api/episode/?page=${page + 1}&name=${search && search.toLocaleLowerCase()}`)
        .then(response => response.json())
        .then(data => dispatch(fetchEpisodesSuccess(data)))
        .catch(error => dispatch(fetchEpisodesFailure(error)))
    }
}

export const changePage = page => ({type: CHANGE_PAGE, payload: page});
export const setSearch = search => ({type: SET_SEARCH, payload: search});
