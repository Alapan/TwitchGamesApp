import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '50px 0'
  },
  heading: {
    marginTop: '20px'
  },
  game: {
    height: '600px',
    width: '400px'
  }
}));

function Game() {
  const [games, setGames] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get('https://api.twitch.tv/helix/games/top', {
      'headers': { 'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID }
    })
    .then((response) => {
      const games = response.data.data;
      games.forEach((game) => {
        const {box_art_url} = game;
        game.box_art_url = box_art_url.replace('{width}x{height}', '320x400');
      });
      setGames(games);
    });
  }, []);

  return (
    <div>
      <Typography variant='h3' className={classes.heading}>
        Most Popular Games
      </Typography>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <Grid container justify='center'>
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
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Game;
