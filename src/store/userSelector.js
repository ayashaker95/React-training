function getUser(state) {
    return state.mistake.filter((mistake) => {
        return !mistake.completed
    });
}