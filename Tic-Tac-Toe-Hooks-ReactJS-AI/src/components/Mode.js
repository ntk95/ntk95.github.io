import React from 'react'
import Title from '../Elements/Title'
import styled from 'styled-components'
import GreenButton from '../Elements/GreenButton'

const Credit=styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
    color: white;
    font-family: 'Itim', cursive;
    font-size:17px;
`
function Mode({ clickHumanBtn, clickAIBtn}) {
    return (
        <>
            <Title>Tic Tac Toe</Title>
            <GreenButton onClick={clickHumanBtn}>2 người chơi</GreenButton>
            <GreenButton onClick={clickAIBtn}>1 người chơi</GreenButton>
            
        </>
    )
}

export default Mode
