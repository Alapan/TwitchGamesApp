import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import axiosInstance from './axios';
import { Link } from 'react-router-dom';
import Title from './Title';
import GridContainer from './GridContainer';
import get from 'lodash/get';
import { setHeightWidth } from './utils';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        flexGrow: 1,
        margin: `${spacing(6)}px 0`
    },
    heading: {
        marginTop: spacing(3)
    },
    game: {
        height: spacing(75),
        width: spacing(50)
    }
}));

const Game = () => {
    const [games, setGames] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        axiosInstance.get('games/top')
        .then((response) => {
            const games = get(response, 'data.data', []).map((game) => {
                const { box_art_url } = game;
                return {
                    ...game,
                    box_art_url: setHeightWidth(box_art_url)
                };
            });
            setGames(games);
        });
    }, []);

    return (
        <div>
            <Title>
                Most Popular Games
            </Title>
            <GridContainer>
                {games.map((game, i) => (
                    <Grid key={i} className={classes.game}>
                        <Link to={`/stream/${game.id}/${game.name}`}>
                            <img src={game.box_art_url} />
                            <Typography color='textPrimary' variant='h6' align='center'>
                                {game.name}
                            </Typography>
                        </Link>
                    </Grid>
                ))}
            </GridContainer>
        </div>
    );
};

export default Game;
