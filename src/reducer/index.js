import {combineReducers} from 'redux';
import ReducerMovies from "./ReducerMovies"
import ReducerSeries from './ReducerSeries'
import LikesReducer from './Counter'

export default combineReducers({ReducerMovies,ReducerSeries,LikesReducer})