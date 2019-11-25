const setGameStreams = (data) => {
    return {
        type: 'SET_GAME_STREAMS',
        game: data.game,
        streams: data.streams
    };
};

export default setGameStreams;
