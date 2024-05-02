// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main/Main';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Main />
            </div>
        </Router>
    );
};

export default App;
