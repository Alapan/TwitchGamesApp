import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: white;
`;

const headerList = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0
}

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'>
          Twitch App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
