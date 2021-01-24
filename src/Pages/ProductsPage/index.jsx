import { Box, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductsPage = ({ ...props }) => {
  const products = props.location.state.products

  return (
    <Box style={{ width: '100%' }}>
      <Box>
        {products.map((item, i) => (
          <div key={i}>
            <div>
              <div>
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    cursor: 'pointer',
                  }}
                  to={{
                    pathname: `/product/${item.name}`,
                    state: { item },
                  }}
                >
                  <img
                    alt={item.name}
                    src={`/img/${item.img}.jpeg`}
                    title={item.name}
                    loading="lazy"
                  />
                </Link>
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Цена {item.price} грн.
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  объем {item.volume} ml
                </Typography>
              </CardContent>
            </div>
          </div>
        ))}
      </Box>
    </Box>
  )
}

export default ProductsPage
