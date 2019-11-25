import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { connect } from 'react-redux';
import axiosInstance from './axios';
import setGameStreams from './actions';

const useStyles = makeStyles(({spacing}) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: spacing(5)
    },
    textField: {
        marginLeft: spacing(1),
        marginRight: spacing(1),
        width: 200
    },
    buttonText: {
        textTransform: 'uppercase',
        paddingTop: spacing(2),
        display: 'block'
    }
}));

const mapStateToProps = (state) => {
    return {
        game: state.game,
        streams: state.streams
    }
}

const actionCreators = {
    setGameStreams
}

const Analytics = (props) => {
    const classes = useStyles();
    const [ input, setInput ] = useState('');

    const onClick = (e) => {
        e.preventDefault();
        axiosInstance.get(`streams/?game={input}`)
        .then((response) => {
            props.setGameStreams({
                game: input,
                streams: response.data.data
            });
        });
    };

    return (
        <form className={classes.container}>
            <TextField
                label='Game'
                placeholder='Enter name of game'
                className={classes.textField}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <Button
                variant='contained'
                color='primary'
                className={classes.textField}
                type='submit'
                onClick={(e) => onClick(e)}
            >
                Get analytics
            </Button>
        </form>
    );
}

export default connect(mapStateToProps, actionCreators)(Analytics);
