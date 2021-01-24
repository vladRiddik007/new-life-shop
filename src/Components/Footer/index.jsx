import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { Container } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'

const Footer = () => (
  <footer style={{ backgroundColor: 'green' }}>
    <Container style={{ textAlign: 'center' }}>
      <Grid container justify={'center'} spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align={'center'} gutterBottom style={{ color: 'white' }}>
            <a
              href="https://new-life.com/uploads/price_list/399-22-012021-600a7fe7222d63.65153526.pdf"
              target="_blanck"
              style={{
                textDecoration: 'none',
                color: 'white',
              }}
            >
              Price List
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align={'center'} gutterBottom style={{ color: 'white' }}>
            <a
              href="https://instagram.com/newlifeshop.ua?igshid=1p8yofmysj8uk"
              target="_blanck"
              style={{
                display: 'flex',
                textDecoration: 'none',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              Instagram
              <InstagramIcon />
            </a>
          </Typography>
        </Grid>
      </Grid>
      <Divider style={{ margin: '24px auto', backgroundColor: 'white' }} />
      <Typography variant="caption" align={'center'} style={{ color: 'white' }}>
        © Copyright 2021: NEW LIFE SHOP
      </Typography>
    </Container>
  </footer>
)

// https://instagram.com/newlifeshop.ua?igshid=1p8yofmysj8uk
// https://new-life.com/uploads/price_list/399-22-012021-600a7fe7222d63.65153526.pdf

Footer.propTypes = {}
Footer.defaultProps = {}

export default Footer
