import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: 250,
    textDecoration: 'none',
    marginBottom: 30,
  },
  media: {
    backgroundSize: 'contain',
    height: 200,
  },
})

export default function MediaCard({ item }) {
  const classes = useStyles()

  return (
    <Card
      className={classes.root}
      component={Link}
      to={{
        pathname: `/product/${item.name}`,
        state: { item },
      }}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`/img/${item.img}.jpeg`}
          title={item.name}
        />
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 144,
          }}
        >
          <Typography gutterBottom component="p">
            {item.name}
          </Typography>
          <div>
            <Typography variant="body2" color="textSecondary" component="p">
              Цена {item.price} грн.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Oбъем {item.volume} ml
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
