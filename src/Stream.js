import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '50px 0'
  },
  heading: {
    marginTop: '20px'
  },
  stream: {
    height: 500,
    width: 400
  }
}));

function Stream(props) {

  const [streams, setStreams] = useState([]);
  const { name } = props.match.params;
  const classes = useStyles();

  useEffect(() => {
    const { id } = props.match.params;
    axios.get(`https://api.twitch.tv/helix/streams?game_id=${id}`, {
      'headers': { 'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID}
    })
    .then((response) => {
      const streams = response.data.data;
      streams.forEach((stream) => {
        let { thumbnail_url } = stream;
        stream.thumbnail_url = thumbnail_url.replace('{width}x{height}', '320x300');
      })
      setStreams(streams);
    });
  }, []);

  return (
    <div>
      <Typography variant='h3' className={classes.heading}>
        Streams for {name}
      </Typography>
      <Grid container className={classes.root} spacing={3}>
        <Grid item xs={12}>
          <Grid container justify='center'>
            {streams.map((stream, i) => (
              <Grid key={i} className={classes.stream}>
                <img src={stream.thumbnail_url} />
                <Typography variant='h5'>
                  User name - {stream.user_name}
                </Typography>
                <Typography variant='caption'>
                  Title - {stream.title}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Stream;
