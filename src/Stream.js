import React, { useState, useEffect } from 'react';
import axiosInstance from './axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Title from './Title';
import GridContainer from './GridContainer';
import get from 'lodash/get';
import { setHeightWidth } from './utils';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        flexGrow: 1,
        margin: `${spacing(6)}px 0`
    },
    stream: {
        height: spacing(75),
        width: spacing(50)
    }
}));

const Stream = (props) => {
    const [streams, setStreams] = useState([]);
    const { name } = props.match.params;
    const classes = useStyles();

    useEffect(() => {
        const { id } = props.match.params;
        axiosInstance.get(`streams?game_id=${id}`)
        .then((response) => {
            const streams = get(response, 'data.data', []).map((stream) => {
                const { thumbnail_url } = stream;
                return {
                    ...stream,
                    thumbnail_url: setHeightWidth(thumbnail_url)
                }
            });
            setStreams(streams);
        });
    }, []);

    return (
        <div>
            <Title>
                Streams for {name}
            </Title>
            <GridContainer>
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
            </GridContainer>
        </div>
    );
};

export default Stream;
