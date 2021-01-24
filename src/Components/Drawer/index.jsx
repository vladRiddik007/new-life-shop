import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'
import { data } from '../../data'
import AdjustIcon from '@material-ui/icons/Adjust'

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

export const SubCategory = ({ categoryName, subcategory }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AdjustIcon />
        </ListItemIcon>
        <ListItemText primary={categoryName} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subcategory.map((subcategory, i) => (
            <ListItem
              className={classes.nested}
              key={i}
              component={Link}
              to={{
                pathname: `/products/${subcategory.subcategoryName}`,
                state: { products: subcategory.products },
              }}
            >
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={subcategory.subcategoryName} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  )
}

const Drawer = () => {
  const classes = useStyles()
  const [state, setState] = React.useState({ left: false })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setState({ ...state, [anchor]: open })
  }

  const list = () => (
    <div className={classes.list} role="presentation">
      <List component="nav">
        {data.map((category, index) => (
          <React.Fragment key={category.id}>
            {category.subcategory ? (
              <SubCategory
                categoryName={category.category}
                subcategory={category.subcategory}
              />
            ) : (
              <ListItem
                component={Link}
                to={{
                  pathname: `/products/${category.category}`,
                  state: { products: category.products },
                }}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={category.category} />
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer('left', true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  )
}

export default Drawer