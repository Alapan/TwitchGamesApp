const initialState = {
    game: '',
    streams: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_GAME_STREAMS':
            return Object.assign(
                {},
                state,
                {
                    game: action.game,
                    streams: action.streams
                }
            );
        default:
            return state
    }
};

export default reducer;
