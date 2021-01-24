import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    // width: 250,
    // textDecoration: 'none',
    // marginBottom: 30,
  },
  media: {
    backgroundSize: 'contain',
    height: 400,
  },
})

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
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Цена {item.price} грн.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Oбъем {item.volume} ml
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Описание: {item.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Состав: {item.structure}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Рекомендации: {item.recommendations}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProductPage
