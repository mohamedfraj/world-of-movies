const LikesReducer = (state = 10, action) => {
    switch (action.type) {
        case "LIKE_IT":
            return (
                state + 1
            )
        case "DISLIKE_IT":
            return (
                state - 1
            )
        default:
            return state
    }
}

export default LikesReducer;