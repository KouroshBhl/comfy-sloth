import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filteredProducts: filtered, gridView } = useFilterContext()

  if (filtered.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry no products matched your search ...
      </h5>
    )
  }

  if (!gridView) {
    return <ListView filtered={filtered} />
  }

  return <GridView filtered={filtered}>product list</GridView>
}

export default ProductList
