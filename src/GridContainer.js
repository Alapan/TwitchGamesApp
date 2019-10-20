import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import omit from 'lodash/omit';

const useStyles = makeStyles(({spacing}) => ({
    root: {
        flexGrow: 1,
        margin: `${spacing(6)}px 0`
    }
}));

const GridContainer = (props) => {
    const classes = useStyles();
    return (
        <Grid {...props.GridRootProps} className={classes.root}>
            <Grid item xs={12}>
                <Grid {...omit(props, ['GridRootProps'])} container justify='center' />
            </Grid>
        </Grid>
    )
}

GridContainer.defaultProps = {
    GridRootProps: {
        spacing: 3,
        container: true
    }
};

GridContainer.propTypes = {
    spacing: PropTypes.number
};

export default GridContainer;
