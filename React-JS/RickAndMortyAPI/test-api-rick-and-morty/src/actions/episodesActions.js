import { 
    CHANGE_PAGE,
    FETCH_EPISODES_BEGGIN, 
    FETCH_EPISODES_FAILURE, 
    FETCH_EPISODES_SUCCESS, 
    SET_SEARCH, 
} from "../types/episodesTypes";

export const fetchEpisodesBeggin = () => ({type: FETCH_EPISODES_BEGGIN});
export const fetchEpisodesSuccess = episodes => ({type: FETCH_EPISODES_SUCCESS, payload: episodes});
export const fetchEpisodesFailure = error => ({type: FETCH_EPISODES_FAILURE, payload: { error }});

export const fetchEpisodes = (page, search='') => {
    return dispatch => {
        dispatch(fetchEpisodesBeggin());
        fetch(`https://rickandmortyapi.com/api/episode/?page=${page + 1}&name=${search && search.toLocaleLowerCase()}`)
        .then(response => response.json())
        .then(data => dispatch(fetchEpisodesSuccess(data)))
        .catch(error => dispatch(fetchEpisodesFailure(error)))
    }
}

export const changePage = page => ({type: CHANGE_PAGE, payload: page});
export const setSearch = search => ({type: SET_SEARCH, payload: search});
