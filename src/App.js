import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Game from './Game';
import Stream from './Stream';
import Analytics from './Analytics';
import theme from './themes';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Header />
                    <Route exact path='/' component={Game} />
                    <Route path='/stream/:id/:name' component={Stream} />
                    <Route path='/analytics' component={Analytics} />
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
