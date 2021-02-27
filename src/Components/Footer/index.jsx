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
        <Grid item xs={12} sm={6} md={3}>
          <Typography align={'center'} gutterBottom style={{ color: 'white' }}>
            Доставка по Украине
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align={'center'} gutterBottom style={{ color: 'white' }}>
            Отправка заказов ПН-СБ, 09:00 - 18:00
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ width: 130, margin: '0 auto' }}>
            <img
              src={`/Nova_Poshta_2014_logo.svg`}
              alt="Nova Post"
              style={{ width: '100%' }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div style={{ width: 130, margin: '0 auto' }}>
            <img
              src={`/Ukrposhta-ua.svg`}
              alt="UKR POST"
              style={{ width: '100%' }}
            />
          </div>
        </Grid>
      </Grid>
      <Divider style={{ margin: '24px auto', backgroundColor: 'white' }} />
      <p
        style={{
          fontSize: 12,
          textAlign: 'start',
          color: 'white',
          lineHeight: '13px',
        }}
      >
        *Самолечение может навредить вашему здоровью! Перед любым приемом
        препаратов необходимо ОБЯЗАТЕЛЬНО ознакомится с инструкцией и
        проконсультироваться с Вашим лечащим врачом. Обязательно изучите
        побочные эффекты, противопоказания и возможность индивидуальной
        непереносимости препарата.
      </p>
      <Divider style={{ margin: '24px auto', backgroundColor: 'white' }} />
      <Typography variant="caption" align={'center'} style={{ color: 'white' }}>
        © Copyright 2021: NEW LIFE SHOP
      </Typography>
    </Container>
  </footer>
)

Footer.propTypes = {}
Footer.defaultProps = {}

export default Footer
