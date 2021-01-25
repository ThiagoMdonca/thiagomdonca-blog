import React from 'react';
import styled from 'styled-components'

function Title(props) {
  return (
    <h1 style={{ color: props.color }}>{props.childdren}</h1>
  )
}

export default function Sobre(props) {
  return (
    <div>
      <header>
        <Title>My page</Title>
      </header>
      <img src='...' />
    </div>

  )

}