import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { charactersReducer} from "./reducers/charactersReducer";
import { episodesReducer} from "./reducers/episodesReducer";
import { locationsReducer} from "./reducers/locationsReducer";

export const store = createStore(combineReducers({
    characters: charactersReducer,
    episodes: episodesReducer,
    locations: locationsReducer
}), applyMiddleware(thunk))