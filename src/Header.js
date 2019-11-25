import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(({ spacing }) => ({
    menuItem: {
        marginRight: spacing(2)
    },
    link: {
        color: 'white',
        textDecoration: 'none'
    }
}));

const Header = () => {
    const classes = useStyles()
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' className={classes.menuItem}>
                    Twitch App
                </Typography>
                <Typography variant='h6' className={classes.menuItem}>
                    <Link to='/analytics' className={classes.link}>View analytics</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
