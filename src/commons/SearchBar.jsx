import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/COLORS';
import { Layout } from './Layout';

export const SearchBar = ({onChange, value, placeholder}) => {
    return (
        <Layout transparent={true}>

        <Container>
            <Input onChange={onChange} value={value} placeholder={placeholder}/>
            <Button>
                search
            </Button>
        </Container>
        </Layout>
    )
};
const Container = styled.div`
display: flex;
flex-direction: row;
height: 50px;
`
const Input = styled.input`
width: 100%;
height: 100%;
padding: 12px 18px;
font-size: 17px;
color: white;
border: 4px solid ${COLORS.mainBg};
border-right: none;
background-color: ${COLORS.secondaryBg};
outline: none;
`
const Button = styled.button`
height: 100%;
border: 4px solid ${COLORS.mainBg};
border-left: none;
background-color: ${COLORS.secondaryBg};
outline: none;
cursor: pointer;
`