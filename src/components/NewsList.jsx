import React, {useState} from 'react';
import styled from 'styled-components';

import { NewsItem } from './NewsItem';

export const NewsList = ({news, background}) => {
 
    return (<Container>
        {news.map(item=> <NewsItem  key ={item.publishedAt} background={background} {...item}/>)}
     
    </Container>)
};

const Container  = styled.div`

max-width: 100%;
`