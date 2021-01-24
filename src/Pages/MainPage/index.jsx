import { Container } from '@material-ui/core'
import React from 'react'

const MainPage = () => {
  return (
    <Container>
      <div style={{ maxWidth: 400, paddingTop: 50, margin: '0 auto' }}>
        <img src={`./logo.svg`} title="New Life" alt="New Life" />
      </div>
    </Container>
  )
}

export default MainPage
