import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(({spacing}) => ({
    heading: {
        marginTop: spacing(3)
    }
}));

const Title = (props) => {
    const classes = useStyles();
    return (
        <Typography {...props} className={classes.heading} />
    );
};

Title.defaultProps = {
    variant: 'h3'
};

Title.propTypes = {
    variant: PropTypes.string
}
export default Title;
