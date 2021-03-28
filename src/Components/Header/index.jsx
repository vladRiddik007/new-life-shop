import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Drawer from '../Drawer'
import { RouterConfig } from '../Layout/RouterConfig'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import AdaptiveMenu from '../AdaptiveMenu'
import Search from '../Search'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

export default function Header() {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:768px)')

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: 'green' }}>
        <Toolbar>
          <Drawer />
          <Typography variant="h6" className={classes.title}>
            New Life Shop
          </Typography>
          <Search />
          {matches ? (
            <div>
              <Link
                to={RouterConfig.mainPage}
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  marginRight: 20,
                }}
              >
                Главная
              </Link>
              <Link
                to={RouterConfig.cheerPage}
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  marginRight: 20,
                }}
              >
                За здоровье!
              </Link>
              <Link
                to={RouterConfig.newsPage}
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  marginRight: 20,
                }}
              >
                Новости
              </Link>
              <Link
                to={RouterConfig.paymentPage}
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  marginRight: 20,
                }}
              >
                Доставка и оплата
              </Link>
            </div>
          ) : <AdaptiveMenu />}
        </Toolbar>
      </AppBar>
    </div>
  )
}
