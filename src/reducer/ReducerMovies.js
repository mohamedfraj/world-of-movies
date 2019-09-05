const ReducerMovies = (state = [], action) => {

    switch (action.type) {

        case "ADD_MOVIE":
            return (
                state.concat(action.newmovie)
            )

        case "REMOVE_MOVIE":
            return (
                state.filter(el => el.id !== action._id)
            )

        case "EDIT_MOVIE":
            return (
                state.map(el => el.id === action.movieToEdit.id ? action.movieToEdit : el)
            )

        case 'UPDATE_MOVIES':
            return (
                state = action.updated
            )
        default:
            return state
    }
}

export default ReducerMovies;