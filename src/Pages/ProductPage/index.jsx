import React from 'react'

const ProductPage = (props) => {
  const item = props.location.state.item
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.description}</p>
    </div>
  )
}

export default ProductPage
