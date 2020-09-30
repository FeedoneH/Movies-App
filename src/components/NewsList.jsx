import React, {useState} from 'react';
import Pagination from "react-js-pagination";
import styled from 'styled-components';
import {COLORS} from '../styles/COLORS'
import { NewsItem } from './NewsItem';

export const NewsList = ({news, background}) => {
 
    return (<Container>
        {news.map(item=> <NewsItem background={background} {...item}/>)}
     
    </Container>)
};

const Container  = styled.div`

max-width: 100%;
`