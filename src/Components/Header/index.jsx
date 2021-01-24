import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Drawer from '../Drawer'

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

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: 'green' }}>
        <Toolbar>
          <Drawer />
          <Typography variant="h6" className={classes.title}>
            New Life Shop
          </Typography>
          <div>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'white' }}>
              Главная
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
