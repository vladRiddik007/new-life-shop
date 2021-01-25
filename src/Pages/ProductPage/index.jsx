import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    // width: 250,
    // textDecoration: 'none',
    // marginBottom: 30,
  },
  media: {
    backgroundSize: 'contain',
    height: 400,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: 'green',
    color: 'white',
  },
}))

const ProductPage = (props) => {
  const item = props.location.state.item
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`/img/${item.img}.jpeg`}
          title={item.name}
        />
        <CardContent style={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Цена {item.price} грн.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Oбъем {item.volume} ml
          </Typography>
          <Button
            target="_blanck"
            variant="contained"
            href="https://instagram.com/newlifeshop.ua?igshid=1p8yofmysj8uk"
            className={classes.button}
            onClick={(event) => {
              event.stopPropagation()
            }}
          >
            Заказать
          </Button>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align={'left'}
          >
            <span style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.87)' }}>
              Описание:
            </span>
            {item.description}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align={'left'}
          >
            <span style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.87)' }}>
              Cостав:
            </span>
            С {item.structure}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align={'left'}
          >
            <span style={{ fontSize: 20, color: 'rgba(0, 0, 0, 0.87)' }}>
              Рекомендации:
            </span>
            {item.recommendations}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductPage
