import React, { useState } from 'react';
import { Reader, Writer } from './pages'

import styled from 'styled-components'

import './App.css';

function App() {

    const [article, setArticle] = useState({
        title: '',
        subtitle: '',
        body: ''
    })

    const TopLevelWrapper = styled.div`
        position: relative;
        background-color: #ebecf1;
        height: 100vh;
    `

    const populateReader = (input) => {
        setArticle(input)
    }

    return (
        <TopLevelWrapper>
            {/* App Compos below */}
            <Reader article={article} />
            <Writer populateReader={populateReader} />
        </TopLevelWrapper>
    );
}

export default App;
