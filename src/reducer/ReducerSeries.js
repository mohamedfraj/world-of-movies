const ReducerSeries = (state = [], action) => {

    switch (action.type) {

        case "ADD_SERIE":
            return (
                state.concat(action.newseries)
            )

        case "REMOVE_SERIE":
            return (
                state.filter(el => el.id !== action._id)
            )

        case "EDIT_SERIE":
            return (
                state.map(el => el.id === action.serieToEdit.id ? action.serieToEdit : el)
            )

        case 'UPDATE_SERIES':
            return (
                state = action.updated
            )

        default:
            return state
    }
}

export default ReducerSeries;