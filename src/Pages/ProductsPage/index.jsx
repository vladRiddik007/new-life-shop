import { Box } from '@material-ui/core'
import React from 'react'
import MediaCard from './card'

const ProductsPage = ({ ...props }) => {
  const products = props.location.state.products

  return (
    <Box style={{ width: '100%' }}>
      <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {products.map((item, i) => (
          <MediaCard key={i} item={item} />
        ))}
      </Box>
    </Box>
  )
}

export default ProductsPage
