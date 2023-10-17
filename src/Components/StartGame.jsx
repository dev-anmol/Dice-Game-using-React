import React from 'react'
import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div><img src="/Images/dices.png" alt="" /></div>
        
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button
            onClick={toggle}
            >Play Now</Button>
        
        </div>
    </Container>
  )
}

export default StartGame

const Container= styled.div`
    max-width:1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    position: relative;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
    .content{
        Button{
            position: absolute;
            right: 0;
        }
    }
`

const Button = styled.button`
color: white;
padding: 10px 18px;
background: #000000;
border-radius: 5px;
min-width: 220px;
border: none;
cursor: pointer;
font-size: 16px;
border: 1px solid transparent;
transition: 0ms.4 background ease-in;

&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition:  0.3 background ease-in;
}
`